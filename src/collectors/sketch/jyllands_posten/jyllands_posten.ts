
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JyllandsPostenCollector extends SketchCollector {

    static CONFIG = {
        id: "jyllands_posten",
        name: "Jyllands-Posten",
        description: "i18n.collectors.jyllands_posten.description",
        version: "0",
        website: "https://jyllands-posten.dk/login?returnUrl=%2F%3FloggedIn%3Dtrue%26loggedIn%3Dtrue",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206516.jpg",
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
        loginUrl: "https://jyllands-posten.dk/login?returnUrl=%2F%3FloggedIn%3Dtrue%26loggedIn%3Dtrue",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JyllandsPostenCollector.CONFIG);
    }
}
