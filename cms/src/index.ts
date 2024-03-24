import { faker } from '@faker-js/faker';

async function seedCategories() {
  for (let i = 0; i < 5; i++) {
    await strapi.db.query('api::category.category').create({
      data: {
        name: faker.commerce.department().toLowerCase()
      }
    });
  }

  console.log('Categories seeded successfully.');
}

async function seedPosts() {
  const categories = await strapi.db.query('api::category.category').findMany();

  for (let i = 0; i < 20; i++) {
    const category = faker.helpers.arrayElement(categories);

    await strapi.db.query('api::post.post').create({
      data: {
        title: faker.lorem.sentence({ max: 5, min: 3 }),
        isFeatured: faker.datatype.boolean(),
        content: faker.lorem.paragraphs(15).split('\n').join('\n\n'),
        categories: [category.id],
        viewCount: faker.number.int({ min: 0, max: 1000 })
      }
    });
  }

  console.log('Posts seeded successfully.');
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
      return;
    }

    // Check if the database has already been seeded
    const postsCount = await strapi.db.query('api::post.post').count();
    const categoriesCount = await strapi.db.query('api::category.category').count();

    if (categoriesCount < 5) {
      await seedCategories();
    }

    if (postsCount < 20) {
      await seedPosts();
    }
  }
};
