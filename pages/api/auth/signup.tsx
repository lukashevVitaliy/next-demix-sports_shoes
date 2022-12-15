import User from '../../../models/User';
import db from '../../../utils/db';
var bcryptjs = require('bcryptjs');
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: 'Ошибка проверки',
    });
    return;
  }

  await db.connect();
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'Пользователь уже существует! ' });
    await db.disconnect();
    return;
  }

  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Пользователь добавлен!',
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
