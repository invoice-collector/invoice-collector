
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BayernwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "bayernwerk",
        name: "Bayernwerk",
        description: "i18n.collectors.bayernwerk.description",
        version: "0",
        website: "https://www.bayernwerk-netz.de/de/service/rechnungen.html#contractAccId=255000112680",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226712.jpg",
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
        loginUrl: "https://www.bayernwerk-netz.de/de/service/rechnungen.html#contractAccId=255000112680",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BayernwerkCollector.CONFIG);
    }
}
