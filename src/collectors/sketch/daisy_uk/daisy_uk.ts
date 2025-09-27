
import { SketchCollector } from '../../sketchCollector';

export class DaisyUkCollector extends SketchCollector {

    static CONFIG = {
        id: "daisy_uk",
        name: "Daisy UK",
        description: "i18n.collectors.daisy_uk.description",
        version: "0",
        website: "https://myaccount.daisycomms.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/389748.jpg",
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
        entryUrl: "https://myaccount.daisycomms.co.uk/",
    }

    constructor() {
        super(DaisyUkCollector.CONFIG);
    }
}
