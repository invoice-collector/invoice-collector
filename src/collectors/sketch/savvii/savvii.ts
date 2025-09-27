
import { SketchCollector } from '../../sketchCollector';

export class SavviiCollector extends SketchCollector {

    static CONFIG = {
        id: "savvii",
        name: "Savvii",
        description: "i18n.collectors.savvii.description",
        version: "0",
        website: "https://billing.savvii.nl/index.php?/clientarea/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19003.jpg",
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
        entryUrl: "https://billing.savvii.nl/index.php?/clientarea/",
    }

    constructor() {
        super(SavviiCollector.CONFIG);
    }
}
