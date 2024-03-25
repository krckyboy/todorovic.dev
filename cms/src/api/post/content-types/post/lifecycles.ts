const slugify = require('slugify');
import { errors } from '@strapi/utils';

const { ApplicationError } = errors;

// Function to generate slug and check featured posts limit
async function processPostData(data) {
  if (data.title) {
    data.slug = slugify(data.title, { lower: true });
  }

  // Check if more than 3 posts are already featured
  const featuredPostsCount = await strapi.db.query('api::post.post').count({ where: { isFeatured: true } });
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
