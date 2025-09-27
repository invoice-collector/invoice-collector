
import { SketchCollector } from '../../sketchCollector';

export class SeliaCollector extends SketchCollector {

    static CONFIG = {
        id: "selia",
        name: "SELIA",
        description: "i18n.collectors.selia.description",
        version: "0",
        website: "https://espaceclient.selia-energies.fr/seolis-web/login?logout=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175547.jpg",
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
        entryUrl: "https://espaceclient.selia-energies.fr/seolis-web/login?logout=true",
    }

    constructor() {
        super(SeliaCollector.CONFIG);
    }
}
