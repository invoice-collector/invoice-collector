
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PaulsenGruppeOnlinePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "paulsen_gruppe_online_portal",
        name: "Paulsen Gruppe Online Portal",
        description: "i18n.collectors.paulsen_gruppe_online_portal.description",
        version: "0",
        website: "https://online.bfgruppe.de/v3/rechnungsarchiv.csp#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919570.jpg",
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
        entryUrl: "https://online.bfgruppe.de/v3/rechnungsarchiv.csp#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaulsenGruppeOnlinePortalCollector.CONFIG);
    }
}
