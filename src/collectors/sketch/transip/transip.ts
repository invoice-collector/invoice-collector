
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TransipCollector extends SketchCollector {

    static CONFIG = {
        id: "transip",
        name: "TransIP",
        description: "i18n.collectors.transip.description",
        version: "0",
        website: "https://www.transip.eu/cp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32719.jpg",
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
        loginUrl: "https://www.transip.eu/cp/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransipCollector.CONFIG);
    }
}
