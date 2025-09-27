
import { SketchCollector } from '../../sketchCollector';

export class MytweakCollector extends SketchCollector {

    static CONFIG = {
        id: "mytweak",
        name: "MyTweak",
        description: "i18n.collectors.mytweak.description",
        version: "0",
        website: "https://kunde.mytweak.at/invoice.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1326316.jpg",
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
        entryUrl: "https://kunde.mytweak.at/invoice.php",
    }

    constructor() {
        super(MytweakCollector.CONFIG);
    }
}
