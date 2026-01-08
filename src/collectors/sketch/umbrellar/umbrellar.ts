
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UmbrellarCollector extends SketchCollector {

    static CONFIG = {
        id: "umbrellar",
        name: "Umbrellar",
        description: "i18n.collectors.umbrellar.description",
        version: "0",
        website: "https://secure.umbrellar.nz/login?_ga=2.21273272.2058613503.1523600439-117179229.1523600439",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8939.jpg",
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
        loginUrl: "https://secure.umbrellar.nz/login?_ga=2.21273272.2058613503.1523600439-117179229.1523600439",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UmbrellarCollector.CONFIG);
    }
}
