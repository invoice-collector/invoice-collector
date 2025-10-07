
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Tele2MobileCollector extends SketchCollector {

    static CONFIG = {
        id: "tele2_mobile",
        name: "Tele2 mobile",
        description: "i18n.collectors.tele2_mobile.description",
        version: "0",
        website: "https://www.tele2.com/about/who-we-are/product-and-services",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136656.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.tele2.com/about/who-we-are/product-and-services",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Tele2MobileCollector.CONFIG);
    }
}
