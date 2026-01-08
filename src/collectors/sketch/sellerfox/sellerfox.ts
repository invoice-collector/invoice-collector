
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SellerfoxCollector extends SketchCollector {

    static CONFIG = {
        id: "sellerfox",
        name: "Sellerfox",
        description: "i18n.collectors.sellerfox.description",
        version: "0",
        website: "http://www.sellerfox.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22754.jpg",
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
        loginUrl: "http://www.sellerfox.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SellerfoxCollector.CONFIG);
    }
}
