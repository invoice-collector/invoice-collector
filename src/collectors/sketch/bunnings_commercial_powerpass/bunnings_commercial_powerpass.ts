
import { SketchCollector } from '../../sketchCollector';

export class BunningsCommercialPowerpassCollector extends SketchCollector {

    static CONFIG = {
        id: "bunnings_commercial_powerpass",
        name: "Bunnings Commercial PowerPass",
        description: "i18n.collectors.bunnings_commercial_powerpass.description",
        version: "0",
        website: "http://www.bunningspowerpass.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68675.jpg",
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
        entryUrl: "http://www.bunningspowerpass.com.au",
    }

    constructor() {
        super(BunningsCommercialPowerpassCollector.CONFIG);
    }
}
