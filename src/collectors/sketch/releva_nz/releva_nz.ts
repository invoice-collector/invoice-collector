
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RelevaNzCollector extends SketchCollector {

    static CONFIG = {
        id: "releva_nz",
        name: "releva.nz",
        description: "i18n.collectors.releva_nz.description",
        version: "0",
        website: "https://frontend.releva.nz/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105964.jpg",
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
        loginUrl: "https://frontend.releva.nz/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RelevaNzCollector.CONFIG);
    }
}
