
import { SketchCollector } from '../../sketchCollector';

export class PaydueCollector extends SketchCollector {

    static CONFIG = {
        id: "paydue",
        name: "PayDue",
        description: "i18n.collectors.paydue.description",
        version: "0",
        website: "https://paydue.de/paydesk/clearing.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385998.jpg",
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
        entryUrl: "https://paydue.de/paydesk/clearing.php",
    }

    constructor() {
        super(PaydueCollector.CONFIG);
    }
}
