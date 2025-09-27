
import { SketchCollector } from '../../sketchCollector';

export class SymplrCollector extends SketchCollector {

    static CONFIG = {
        id: "symplr",
        name: "symplr",
        description: "i18n.collectors.symplr.description",
        version: "0",
        website: "https://cockpit.symplr.de/credits/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022440.jpg",
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
        entryUrl: "https://cockpit.symplr.de/credits/",
    }

    constructor() {
        super(SymplrCollector.CONFIG);
    }
}
