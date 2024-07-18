import { faker } from '@faker-js/faker';
import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categoryFactory = async (): Promise<Category> => {
  return prisma.category.create({
    data: {
      name: faker.commerce.productName(),
    },
  });
};
