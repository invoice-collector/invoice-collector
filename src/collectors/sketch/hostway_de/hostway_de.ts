
import { SketchCollector } from '../../sketchCollector';

export class HostwayDeCollector extends SketchCollector {

    static CONFIG = {
        id: "hostway_de",
        name: "Hostway(.de)",
        description: "i18n.collectors.hostway_de.description",
        version: "0",
        website: "https://helix.hostway.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222544.jpg",
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
        entryUrl: "https://helix.hostway.de",
    }

    constructor() {
        super(HostwayDeCollector.CONFIG);
    }
}
