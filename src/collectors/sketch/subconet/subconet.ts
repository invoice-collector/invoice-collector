
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SubconetCollector extends SketchCollector {

    static CONFIG = {
        id: "subconet",
        name: "Subconet",
        description: "i18n.collectors.subconet.description",
        version: "0",
        website: "https://www.subconet.nl/subconet/mijn-subconet/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33382.jpg",
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
        loginUrl: "https://www.subconet.nl/subconet/mijn-subconet/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SubconetCollector.CONFIG);
    }
}
