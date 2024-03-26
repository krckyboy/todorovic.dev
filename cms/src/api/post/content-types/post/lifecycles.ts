const slugify = require('slugify');
import { errors } from '@strapi/utils';

const { ApplicationError } = errors;

// Function to generate slug and check featured posts limit
async function processPostData(data) {
  const { title } = data;

  if (title) {
    const processedText = title.replace(/:/g, '-');
    data.slug = slugify(processedText, { lower: true });
  }

  // Fetch posts where isFeatured is true
  const featuredPosts = await strapi.db.query('api::post.post').findMany({ where: { isFeatured: true } });
  let featuredPostsCount = featuredPosts.length;

  // If this is an update operation and the post is already featured, exclude it from the count
  if (data.id) {
    const currentPost = featuredPosts.find(post => post.id === data.id);
    if (currentPost) {
      featuredPostsCount -= 1; // Adjust the count to exclude the current post
    }
  }
  if (data.isFeatured && featuredPostsCount >= 3) {
    throw new ApplicationError(`Cannot create more than 3 featured posts. There are currently ${featuredPostsCount} featured posts!`);
  }
}

module.exports = {
  async beforeCreate(event) {
    await processPostData(event.params.data);
  },
  async beforeUpdate(event) {
    await processPostData(event.params.data);
  }
};
