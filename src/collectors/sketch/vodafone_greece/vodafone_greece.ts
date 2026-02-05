
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneGreeceCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_greece",
        name: "Vodafone Greece",
        description: "i18n.collectors.vodafone_greece.description",
        version: "0",
        website: "https://www.vodafone.gr/#login-snack",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136654.jpg",
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
        loginUrl: "https://www.vodafone.gr/#login-snack",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneGreeceCollector.CONFIG);
    }
}
