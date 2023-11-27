import { NextApiHandler } from 'next';

import db from '@/server/lib';
import User from '@/server/models/user';

const handler: NextApiHandler = async (req, res) => {
  await db;

  if (req.method === 'GET') {
    const users = await User.find({});

    if (req.query.id) return res.status(200).json(users[Number(req.query.id)]);

    return res.status(200).json(users);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

export default handler;
