
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KiaOneCollector extends SketchCollector {

    static CONFIG = {
        id: "kia_one",
        name: "Kia One",
        description: "i18n.collectors.kia_one.description",
        version: "0",
        website: "https://www.kdealer.com/DealerOthersReport",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593437.jpg",
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
        loginUrl: "https://www.kdealer.com/DealerOthersReport",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KiaOneCollector.CONFIG);
    }
}
