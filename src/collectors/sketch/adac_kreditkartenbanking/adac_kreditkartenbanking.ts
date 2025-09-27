
import { SketchCollector } from '../../sketchCollector';

export class AdacKreditkartenbankingCollector extends SketchCollector {

    static CONFIG = {
        id: "adac_kreditkartenbanking",
        name: "ADAC Kreditkartenbanking",
        description: "i18n.collectors.adac_kreditkartenbanking.description",
        version: "0",
        website: "https://banking.adac-kreditkarte.de/profile/post-box/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3273921.jpg",
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
        entryUrl: "https://banking.adac-kreditkarte.de/profile/post-box/",
    }

    constructor() {
        super(AdacKreditkartenbankingCollector.CONFIG);
    }
}
