
import { SketchCollector } from '../../sketchCollector';

export class PascoCountyCollector extends SketchCollector {

    static CONFIG = {
        id: "pasco_county",
        name: "Pasco County",
        description: "i18n.collectors.pasco_county.description",
        version: "0",
        website: "https://pascoeasypay.pascocountyfl.net/my-account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2195550.jpg",
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
        entryUrl: "https://pascoeasypay.pascocountyfl.net/my-account/billing",
    }

    constructor() {
        super(PascoCountyCollector.CONFIG);
    }
}
