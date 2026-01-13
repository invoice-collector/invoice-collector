
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TicketFleetProCollector extends SketchCollector {

    static CONFIG = {
        id: "ticket_fleet_pro",
        name: "TICKET FLEET PRO",
        description: "i18n.collectors.ticket_fleet_pro.description",
        version: "0",
        website: "https://extranet.lacartecarburant.com/petrole/BackOfficeUTA/fr/facturation/consultation-factures-client/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/190084.jpg",
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
        loginUrl: "https://extranet.lacartecarburant.com/petrole/BackOfficeUTA/fr/facturation/consultation-factures-client/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TicketFleetProCollector.CONFIG);
    }
}
