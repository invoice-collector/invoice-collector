
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TicketRegionalCollector extends SketchCollector {

    static CONFIG = {
        id: "ticket_regional",
        name: "Ticket Regional",
        description: "i18n.collectors.ticket_regional.description",
        version: "0",
        website: "http://www.ticket-regional.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84429.jpg",
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
        loginUrl: "http://www.ticket-regional.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TicketRegionalCollector.CONFIG);
    }
}
