
import { SketchCollector } from '../../sketchCollector';

export class HolzspielereiCollector extends SketchCollector {

    static CONFIG = {
        id: "holzspielerei",
        name: "Holzspielerei",
        description: "i18n.collectors.holzspielerei.description",
        version: "0",
        website: "https://holzspielerei.com/jtl.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728430.jpg",
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
        entryUrl: "https://holzspielerei.com/jtl.php",
    }

    constructor() {
        super(HolzspielereiCollector.CONFIG);
    }
}
