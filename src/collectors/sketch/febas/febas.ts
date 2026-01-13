
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FebasCollector extends SketchCollector {

    static CONFIG = {
        id: "febas",
        name: "Febas",
        description: "i18n.collectors.febas.description",
        version: "0",
        website: "https://www.febas.de/kundenbereich/invoice/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1914330.jpg",
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
        loginUrl: "https://www.febas.de/kundenbereich/invoice/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FebasCollector.CONFIG);
    }
}
