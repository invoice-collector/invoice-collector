
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConsorsfinanzCollector extends SketchCollector {

    static CONFIG = {
        id: "consorsfinanz",
        name: "Consorsfinanz",
        description: "i18n.collectors.consorsfinanz.description",
        version: "0",
        website: "https://olb.consorsfinanz.de/web/homebanking/umsatze",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178819.jpg",
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
        loginUrl: "https://olb.consorsfinanz.de/web/homebanking/umsatze",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConsorsfinanzCollector.CONFIG);
    }
}
