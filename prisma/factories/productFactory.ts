import { faker } from '@faker-js/faker';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export const productFactory = async (): Promise<Product> => {
  return prisma.product.create({
    data: {
      name: faker.commerce.productName(),
      buy_price: Number(faker.commerce.price()),
      sell_price: Number(faker.commerce.price()),
      stock: faker.number.int({ min: 0, max: 100 }),
      image: faker.image.url(),
      description: faker.lorem.paragraph(),
      categoryId: faker.number.int({ min: 1, max: 3 }),
    },
  });
};
