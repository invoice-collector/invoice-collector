
import { SketchCollector } from '../../sketchCollector';

export class BitwardenCollector extends SketchCollector {

    static CONFIG = {
        id: "bitwarden",
        name: "Bitwarden",
        description: "i18n.collectors.bitwarden.description",
        version: "0",
        website: "https://vault.bitwarden.com/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39294.jpg",
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
        entryUrl: "https://vault.bitwarden.com/#/",
    }

    constructor() {
        super(BitwardenCollector.CONFIG);
    }
}
