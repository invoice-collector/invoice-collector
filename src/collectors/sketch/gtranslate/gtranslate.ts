
import { SketchCollector } from '../../sketchCollector';

export class GtranslateCollector extends SketchCollector {

    static CONFIG = {
        id: "gtranslate",
        name: "GTranslate",
        description: "i18n.collectors.gtranslate.description",
        version: "0",
        website: "https://my.gtranslate.io/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2183872.jpg",
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
        entryUrl: "https://my.gtranslate.io/billing",
    }

    constructor() {
        super(GtranslateCollector.CONFIG);
    }
}
