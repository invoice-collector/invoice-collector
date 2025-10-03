
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HandyticketSwuCollector extends SketchCollector {

    static CONFIG = {
        id: "handyticket_swu",
        name: "Handyticket - SWU",
        description: "i18n.collectors.handyticket_swu.description",
        version: "0",
        website: "https://handyticket.de/portals/web/nutzer/swu/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206203.jpg",
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
        entryUrl: "https://handyticket.de/portals/web/nutzer/swu/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HandyticketSwuCollector.CONFIG);
    }
}
