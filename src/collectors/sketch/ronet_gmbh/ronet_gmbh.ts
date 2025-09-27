
import { SketchCollector } from '../../sketchCollector';

export class RonetGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "ronet_gmbh",
        name: "roNet GmbH",
        description: "i18n.collectors.ronet_gmbh.description",
        version: "0",
        website: "https://login.ronet.de/kundendaten.rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59326.jpg",
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
        entryUrl: "https://login.ronet.de/kundendaten.rechnungen",
    }

    constructor() {
        super(RonetGmbhCollector.CONFIG);
    }
}
