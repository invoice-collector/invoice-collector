
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DandomainDkCollector extends SketchCollector {

    static CONFIG = {
        id: "dandomain_dk",
        name: "DanDomain.dk",
        description: "i18n.collectors.dandomain_dk.description",
        version: "0",
        website: "https://kundecenter.dandomain.dk/login.aspx?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9074.jpg",
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
        loginUrl: "https://kundecenter.dandomain.dk/login.aspx?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DandomainDkCollector.CONFIG);
    }
}
