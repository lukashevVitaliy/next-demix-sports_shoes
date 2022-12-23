// созданный API для отправки заказа в БД
import { getSession } from 'next-auth/react';
import Order from '../../../models/Order';
import db from '../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }
  const { user } = session;
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    // @ts-ignore
    user: user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};

export default handler;
