
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdmitadCollector extends SketchCollector {

    static CONFIG = {
        id: "admitad",
        name: "Admitad",
        description: "i18n.collectors.admitad.description",
        version: "0",
        website: "https://www.admitad.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/229638.jpg",
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
        loginUrl: "https://www.admitad.com/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdmitadCollector.CONFIG);
    }
}
