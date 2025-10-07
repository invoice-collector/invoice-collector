
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ToneartCollector extends SketchCollector {

    static CONFIG = {
        id: "toneart",
        name: "Toneart",
        description: "i18n.collectors.toneart.description",
        version: "0",
        website: "https://www.toneart-shop.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39452.jpg",
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
        entryUrl: "https://www.toneart-shop.de/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToneartCollector.CONFIG);
    }
}
