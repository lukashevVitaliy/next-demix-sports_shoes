import { getSession } from 'next-auth/react';
import Order from '../../../models/Order';
import db from '../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: 'требуется регистрация' });
  }
  const { user } = session;
  await db.connect();
  // @ts-ignore
  const orders = await Order.find({ user: user._id });
  await db.disconnect();
  res.send(orders);
};

export default handler;
