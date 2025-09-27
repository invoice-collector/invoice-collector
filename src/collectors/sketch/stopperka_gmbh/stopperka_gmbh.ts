
import { SketchCollector } from '../../sketchCollector';

export class StopperkaGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "stopperka_gmbh",
        name: "Stopperka GmbH",
        description: "i18n.collectors.stopperka_gmbh.description",
        version: "0",
        website: "buero@xlcut.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799153.jpg",
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
        entryUrl: "buero@xlcut.de",
    }

    constructor() {
        super(StopperkaGmbhCollector.CONFIG);
    }
}
