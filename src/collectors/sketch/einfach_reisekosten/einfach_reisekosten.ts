
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EinfachReisekostenCollector extends SketchCollector {

    static CONFIG = {
        id: "einfach_reisekosten",
        name: "Einfach Reisekosten",
        description: "i18n.collectors.einfach_reisekosten.description",
        version: "0",
        website: "https://www.einfach-reisekosten.de/app/secure/account-billings.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7668.jpg",
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
        loginUrl: "https://www.einfach-reisekosten.de/app/secure/account-billings.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EinfachReisekostenCollector.CONFIG);
    }
}
