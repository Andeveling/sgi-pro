import { categoryFactory } from '../factories/categoryFactory';

export const categorySeeder = async () => {
  for (let i = 1; i <= 3; i++) {
    await categoryFactory();
  }
};
