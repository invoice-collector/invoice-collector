
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TraedeCollector extends SketchCollector {

    static CONFIG = {
        id: "traede",
        name: "Traede",
        description: "i18n.collectors.traede.description",
        version: "0",
        website: "https://app.traede.com/invoices?page=1&perPage=20&sort=&sortDirection=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777318.jpg",
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
        loginUrl: "https://app.traede.com/invoices?page=1&perPage=20&sort=&sortDirection=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TraedeCollector.CONFIG);
    }
}
