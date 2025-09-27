
import { SketchCollector } from '../../sketchCollector';

export class XiboSignageCollector extends SketchCollector {

    static CONFIG = {
        id: "xibo_signage",
        name: "Xibo Signage",
        description: "i18n.collectors.xibo_signage.description",
        version: "0",
        website: "https://xibosignage.com/my-account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732301.jpg",
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
        entryUrl: "https://xibosignage.com/my-account/billing",
    }

    constructor() {
        super(XiboSignageCollector.CONFIG);
    }
}
