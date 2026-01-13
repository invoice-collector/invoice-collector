
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NissanEuropeanB2bPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "nissan_european_b2b_portal",
        name: "Nissan European B2B Portal",
        description: "i18n.collectors.nissan_european_b2b_portal.description",
        version: "0",
        website: "https://login.eu.nissan.biz/nidp/idff/sso?id=B2B&sid=0&option=credential&sid=0&target=https%3A%2F%2Feu.nissan.biz%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131286.jpg",
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
        loginUrl: "https://login.eu.nissan.biz/nidp/idff/sso?id=B2B&sid=0&option=credential&sid=0&target=https%3A%2F%2Feu.nissan.biz%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NissanEuropeanB2bPortalCollector.CONFIG);
    }
}
