
import { SketchCollector } from '../../sketchCollector';

export class DbIpCollector extends SketchCollector {

    static CONFIG = {
        id: "db_ip",
        name: "DB-IP",
        description: "i18n.collectors.db_ip.description",
        version: "0",
        website: "https://db-ip.com/account/account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1186038.jpg",
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
        entryUrl: "https://db-ip.com/account/account.php",
    }

    constructor() {
        super(DbIpCollector.CONFIG);
    }
}
