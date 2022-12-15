import Product from '../../models/Product';
import Review from '../../models/Review';
import User from '../../models/User';
import db from '../../utils/db';
import { products } from '../../utils/products';
import type { NextApiRequest, NextApiResponse } from 'next';

// определяем функцию обработчика
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  // импортируем полизователя из модели пользователя
  // удаляем всех предыдущих пользователей в пользовательской коллекции
  await User.deleteMany();
  // добавить пользователей
  await User.insertMany(products.users);

  // импортируем товары из модели products
  // удаляем все предыдущие товары в пользовательской коллекции
  await Product.deleteMany();
  // добавить товары
  await Product.insertMany(products.products);

  // импортируем товары из модели products
  // удаляем все предыдущие товары в пользовательской коллекции
  await Review.deleteMany();
  // добавить товары
  await Review.insertMany(products.reviews);

  // разъеденить после загрузки данных пользоателей
  await db.disconnect();
  // отправляем сообщение о успешной загрузке данных
  res.send({ message: 'Данные успешно загружены...' });
};
export default handler;
