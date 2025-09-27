
import { SketchCollector } from '../../sketchCollector';

export class FullrateDkCollector extends SketchCollector {

    static CONFIG = {
        id: "fullrate_dk",
        name: "Fullrate.dk",
        description: "i18n.collectors.fullrate_dk.description",
        version: "0",
        website: "https://www.fullrate.dk/selvbetjening/fakturaoversigt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80276.jpg",
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
        entryUrl: "https://www.fullrate.dk/selvbetjening/fakturaoversigt",
    }

    constructor() {
        super(FullrateDkCollector.CONFIG);
    }
}
