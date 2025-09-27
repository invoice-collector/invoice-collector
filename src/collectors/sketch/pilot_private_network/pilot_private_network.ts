
import { SketchCollector } from '../../sketchCollector';

export class PilotPrivateNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "pilot_private_network",
        name: "Pilot Private Network",
        description: "i18n.collectors.pilot_private_network.description",
        version: "0",
        website: "https://partners.pilot.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180710.jpg",
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
        entryUrl: "https://partners.pilot.de/auszahlungen.cgi",
    }

    constructor() {
        super(PilotPrivateNetworkCollector.CONFIG);
    }
}
