import { productFactory } from '../factories/productFactory';

export const productSeeder = async () => {
  for (let i = 1; i <= 10; i++) {
    await productFactory();
  }
};
