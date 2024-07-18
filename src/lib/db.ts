'use server';
import { PrismaClient } from '@prisma/client';
import type { Product } from '@prisma/client';

const prisma = new PrismaClient();

export const getProducts = async (
  search: string,
  offset: number,
): Promise<{
  products: Product[];
  newOffset: number | null;
  totalProducts: number;
}> => {
  // If search is provided, return filtered products
  if (search) {
    return {
      products: await prisma.product.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              description: {
                contains: search,
              },
            },
          ],
        },
        skip: offset,
        take: 5,
      }),
      newOffset: offset + 5,
      totalProducts: await prisma.product.count(),
    };
  }
  // If no search is provided, return all products
  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }
  const totalProducts = await prisma.product.count();
  const moreProducts = await prisma.product.findMany({
    skip: offset,
    take: 5,
  });
  const newOffset = moreProducts.length >= 5 ? offset + 5 : null;
  return {
    products: moreProducts,
    newOffset,
    totalProducts,
  };
};

export const deleteProductById = async (id: number) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};