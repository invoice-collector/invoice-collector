
import { SketchCollector } from '../../sketchCollector';

export class RevisitorsCollector extends SketchCollector {

    static CONFIG = {
        id: "revisitors",
        name: "Revisitors",
        description: "i18n.collectors.revisitors.description",
        version: "0",
        website: "https://www.revisitors.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32628.jpg",
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
        entryUrl: "https://www.revisitors.com/login.php",
    }

    constructor() {
        super(RevisitorsCollector.CONFIG);
    }
}
