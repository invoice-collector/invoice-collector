
import { SketchCollector } from '../../sketchCollector';

export class PakkelabelsDkCollector extends SketchCollector {

    static CONFIG = {
        id: "pakkelabels_dk",
        name: "Pakkelabels.dk",
        description: "i18n.collectors.pakkelabels_dk.description",
        version: "0",
        website: "https://app.pakkelabels.dk/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21981.jpg",
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
        entryUrl: "https://app.pakkelabels.dk/account/login/",
    }

    constructor() {
        super(PakkelabelsDkCollector.CONFIG);
    }
}
