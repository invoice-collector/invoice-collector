
import { SketchCollector } from '../../sketchCollector';

export class FortisPolsterCollector extends SketchCollector {

    static CONFIG = {
        id: "fortis_polster",
        name: "Fortis Polster",
        description: "i18n.collectors.fortis_polster.description",
        version: "0",
        website: "https://www.fortispolster.de/user/loginUser",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14898.jpg",
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
        entryUrl: "https://www.fortispolster.de/user/loginUser",
    }

    constructor() {
        super(FortisPolsterCollector.CONFIG);
    }
}
