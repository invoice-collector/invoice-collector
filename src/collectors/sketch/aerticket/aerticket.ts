
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AerticketCollector extends SketchCollector {

    static CONFIG = {
        id: "aerticket",
        name: "AERTicket",
        description: "i18n.collectors.aerticket.description",
        version: "0",
        website: "https://cockpit.aerticket.de/home/mein-aer/rechnungen-und-gutschriften/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22091.jpg",
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
        loginUrl: "https://cockpit.aerticket.de/home/mein-aer/rechnungen-und-gutschriften/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AerticketCollector.CONFIG);
    }
}
