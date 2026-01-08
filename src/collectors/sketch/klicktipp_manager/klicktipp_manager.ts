
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KlicktippManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "klicktipp_manager",
        name: "Klicktipp Manager",
        description: "i18n.collectors.klicktipp_manager.description",
        version: "0",
        website: "https://www.digistore24.com/receipt/3A4YFYVP/YS9R3NMX",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063559.jpg",
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
        loginUrl: "https://www.digistore24.com/receipt/3A4YFYVP/YS9R3NMX",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlicktippManagerCollector.CONFIG);
    }
}
