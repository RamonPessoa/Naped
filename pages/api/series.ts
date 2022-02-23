import type { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('naped', 'reimund', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

const News = sequelize.define(
  'news',
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await News.findAll();

  res.json(result);
}
