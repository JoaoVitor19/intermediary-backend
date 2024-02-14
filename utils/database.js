import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'intermediary-db',
    'jao',
    'root', 
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