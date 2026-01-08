
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneUkCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_uk",
        name: "Vodafone UK",
        description: "i18n.collectors.vodafone_uk.description",
        version: "0",
        website: "https://www.vodafone.co.uk/myvodafone/faces/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8565.jpg",
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
        loginUrl: "https://www.vodafone.co.uk/myvodafone/faces/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafoneUkCollector.CONFIG);
    }
}
