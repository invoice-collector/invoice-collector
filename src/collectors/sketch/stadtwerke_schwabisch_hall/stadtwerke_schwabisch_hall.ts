
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeSchwabischHallCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_schwabisch_hall",
        name: "Stadtwerke Schwabisch Hall",
        description: "i18n.collectors.stadtwerke_schwabisch_hall.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-hall.de/kp?id=eup_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761409.jpg",
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
        loginUrl: "https://kundenportal.stadtwerke-hall.de/kp?id=eup_invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeSchwabischHallCollector.CONFIG);
    }
}
