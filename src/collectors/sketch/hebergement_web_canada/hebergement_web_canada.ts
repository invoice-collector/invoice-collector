
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HebergementWebCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "hebergement_web_canada",
        name: "Hebergement Web Canada",
        description: "i18n.collectors.hebergement_web_canada.description",
        version: "0",
        website: "https://clients.whc.ca/clientarea.php?language=french",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/749692.jpg",
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
        loginUrl: "https://clients.whc.ca/clientarea.php?language=french",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HebergementWebCanadaCollector.CONFIG);
    }
}
