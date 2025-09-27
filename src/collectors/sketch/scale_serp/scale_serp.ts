
import { SketchCollector } from '../../sketchCollector';

export class ScaleSerpCollector extends SketchCollector {

    static CONFIG = {
        id: "scale_serp",
        name: "Scale SERP",
        description: "i18n.collectors.scale_serp.description",
        version: "0",
        website: "https://app.scaleserp.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/813720.jpg",
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
        entryUrl: "https://app.scaleserp.com/account",
    }

    constructor() {
        super(ScaleSerpCollector.CONFIG);
    }
}
