import { MongoDB } from "./mongodb";
import { AbstractDatabase } from "./abstractDatabase";
import * as utils from "../utils";

export class DatabaseFactory {
    static instance: AbstractDatabase;

    static getDatabase(): AbstractDatabase {
        if (!DatabaseFactory.instance) {
            const databaseUri = utils.getEnvVar("DATABASE_URI");
            if(databaseUri && databaseUri.startsWith('mongodb')) {
                DatabaseFactory.instance = new MongoDB(databaseUri);
            }
            else {
                throw new Error('Unsupported database type');
            }
        }
        return DatabaseFactory.instance;
    }
}
