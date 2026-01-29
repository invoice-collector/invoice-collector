
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandyTicketDeutschlandSwsCollector extends SketchCollector {

    static CONFIG = {
        id: "handy_ticket_deutschland_sws",
        name: "Handy-Ticket Deutschland - SWS",
        description: "i18n.collectors.handy_ticket_deutschland_sws.description",
        version: "0",
        website: "https://handyticket.de/portals/web/nutzer/sws/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124357.jpg",
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
        loginUrl: "https://handyticket.de/portals/web/nutzer/sws/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HandyTicketDeutschlandSwsCollector.CONFIG);
    }
}
