
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IevDkCollector extends SketchCollector {

    static CONFIG = {
        id: "iev_dk",
        name: "IEV.dk",
        description: "i18n.collectors.iev_dk.description",
        version: "0",
        website: "https://www.energi-ikast.dk/kundeservice/selvbetjening/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9593.jpg",
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
        loginUrl: "https://www.energi-ikast.dk/kundeservice/selvbetjening/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IevDkCollector.CONFIG);
    }
}
