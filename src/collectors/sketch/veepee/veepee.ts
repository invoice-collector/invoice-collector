
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VeepeeCollector extends SketchCollector {

    static CONFIG = {
        id: "veepee",
        name: "Veepee",
        description: "i18n.collectors.veepee.description",
        version: "0",
        website: "https://www.veepee.fr/authentication/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618940.jpg",
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
        loginUrl: "https://www.veepee.fr/authentication/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VeepeeCollector.CONFIG);
    }
}
