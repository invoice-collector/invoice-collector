
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OneparkCollector extends SketchCollector {

    static CONFIG = {
        id: "onepark",
        name: "OnePark",
        description: "i18n.collectors.onepark.description",
        version: "0",
        website: "https://www.onepark.fr/?origin=header&modal=connect",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137013.jpg",
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
        loginUrl: "https://www.onepark.fr/?origin=header&modal=connect",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneparkCollector.CONFIG);
    }
}
