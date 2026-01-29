
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChiemgauDslCollector extends SketchCollector {

    static CONFIG = {
        id: "chiemgau_dsl",
        name: "Chiemgau-DSL",
        description: "i18n.collectors.chiemgau_dsl.description",
        version: "0",
        website: "http://chiemgau-dsl.info/portal.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9601.jpg",
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
        loginUrl: "http://chiemgau-dsl.info/portal.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ChiemgauDslCollector.CONFIG);
    }
}
