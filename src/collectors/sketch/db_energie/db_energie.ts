
import { SketchCollector } from '../../sketchCollector';

export class DbEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "db_energie",
        name: "DB Energie",
        description: "i18n.collectors.db_energie.description",
        version: "0",
        website: "https://dbenergie.sps-ocs.de/Document/Documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723346.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://dbenergie.sps-ocs.de/Document/Documents",
    }

    constructor() {
        super(DbEnergieCollector.CONFIG);
    }
}
