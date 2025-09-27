
import { SketchCollector } from '../../sketchCollector';

export class UpcChCollector extends SketchCollector {

    static CONFIG = {
        id: "upc_ch",
        name: "UPC.ch",
        description: "i18n.collectors.upc_ch.description",
        version: "0",
        website: "https://www.upc.ch/en/account/login/credentials/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26141.jpg",
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
        entryUrl: "https://www.upc.ch/en/account/login/credentials/",
    }

    constructor() {
        super(UpcChCollector.CONFIG);
    }
}
