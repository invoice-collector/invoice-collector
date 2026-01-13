
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AldiMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "aldi_mobile",
        name: "Aldi Mobile",
        description: "i18n.collectors.aldi_mobile.description",
        version: "0",
        website: "https://www.alditalk-kundenbetreuung.de/de/konto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/237950.jpg",
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
        loginUrl: "https://www.alditalk-kundenbetreuung.de/de/konto/rechnungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AldiMobileCollector.CONFIG);
    }
}
