
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlentymakretsBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "plentymakrets_business",
        name: "Plentymakrets Business",
        description: "i18n.collectors.plentymakrets_business.description",
        version: "0",
        website: "https://plentymarkets-cloud-ie.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1268416.jpg",
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
        loginUrl: "https://plentymarkets-cloud-ie.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlentymakretsBusinessCollector.CONFIG);
    }
}
