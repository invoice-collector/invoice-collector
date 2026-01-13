
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TicketIOCollector extends SketchCollector {

    static CONFIG = {
        id: "ticket_i_o",
        name: "Ticket i/o",
        description: "i18n.collectors.ticket_i_o.description",
        version: "0",
        website: "https://backstage.ticket.io/payoff/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534121.jpg",
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
        loginUrl: "https://backstage.ticket.io/payoff/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TicketIOCollector.CONFIG);
    }
}
