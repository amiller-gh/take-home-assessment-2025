import pg from "pg"
import { Sequelize, DataTypes, literal, Model } from "sequelize";

import { IRegistrationDeadline, State } from "../../models";

const DB_URL = `postgres://${process.env.PG_USER}:${process.env.PG_PWD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`;

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  dialectModule: pg,
});


class RegistrationDeadline extends Model implements IRegistrationDeadline {
  state: State;
  reg_deadline_in_person: number;
  reg_deadline_mail: number;
  reg_deadline_online: number;
  same_day_reg: string;
  reg_url: string;
  description: string;
}

RegistrationDeadline.init(
    {
        state: { type: DataTypes.STRING, primaryKey: true },
        reg_deadline_in_person: DataTypes.INTEGER,
        reg_deadline_mail: DataTypes.INTEGER,
        reg_deadline_online: DataTypes.INTEGER,
        same_day_reg: DataTypes.STRING,
        reg_url: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "registration_deadlines",
      timestamps: false,
    }
);

export async function GET() {
  const data = await RegistrationDeadline.findAll({
      attributes: [
        'state',
        // Fetch our date values as ms since unix epoch for easy use on the client side.
        [literal('CAST(extract(epoch from "reg_deadline_in_person") AS FLOAT) * 1000'), 'reg_deadline_in_person'],
        [literal('CAST(extract(epoch from "reg_deadline_mail") AS FLOAT) * 1000'), 'reg_deadline_mail'],
        [literal('CAST(extract(epoch from "reg_deadline_online") AS FLOAT) * 1000'), 'reg_deadline_online'],
        'same_day_reg',
        'reg_url',
        'description',
      ],
  });
  return new Response(
    JSON.stringify({ status: 'success', data }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
