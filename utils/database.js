import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'intermediary-db', //DATABASE NAME
    'postgres', // USERNAME
    'root',  //PASSWORD
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        }
    }
);

export default sequelize;