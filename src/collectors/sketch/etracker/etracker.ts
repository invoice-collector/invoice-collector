
import { SketchCollector } from '../../sketchCollector';

export class EtrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "etracker",
        name: "eTracker",
        description: "i18n.collectors.etracker.description",
        version: "0",
        website: "https://application.etracker.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/895.jpg",
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
        entryUrl: "https://application.etracker.com/login.php",
    }

    constructor() {
        super(EtrackerCollector.CONFIG);
    }
}
