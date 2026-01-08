
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TrenoisComCollector extends SketchCollector {

    static CONFIG = {
        id: "trenois_com",
        name: "Trenois Decamps",
        description: "i18n.collectors.trenois_com.description",
        version: "0",
        website: "https://www.trenois.com/",
        logo: "https://ish.trenois.com/INTERSHOP/static/BOS/Trenois-Site/trenoisDecamps-rest/Trenois-trenoisDecamps-rest/fr_FR/logos/td.svg",
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
        loginUrl: "https://www.trenois.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrenoisComCollector.CONFIG);
    }
}
