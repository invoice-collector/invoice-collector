
import { SketchCollector } from '../../sketchCollector';

export class FlexbitsCollector extends SketchCollector {

    static CONFIG = {
        id: "flexbits",
        name: "Flexbits",
        description: "i18n.collectors.flexbits.description",
        version: "0",
        website: "https://hub.flexibits.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3340058.jpg",
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
        entryUrl: "https://hub.flexibits.com/billing",
    }

    constructor() {
        super(FlexbitsCollector.CONFIG);
    }
}
