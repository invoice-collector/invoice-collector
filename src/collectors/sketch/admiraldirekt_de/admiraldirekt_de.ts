
import { SketchCollector } from '../../sketchCollector';

export class AdmiraldirektDeCollector extends SketchCollector {

    static CONFIG = {
        id: "admiraldirekt_de",
        name: "Admiraldirekt.de",
        description: "i18n.collectors.admiraldirekt_de.description",
        version: "0",
        website: "https://portal.admiraldirekt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040936.jpg",
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
        entryUrl: "https://portal.admiraldirekt.de",
    }

    constructor() {
        super(AdmiraldirektDeCollector.CONFIG);
    }
}
