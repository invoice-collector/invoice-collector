
import { SketchCollector } from '../../sketchCollector';

export class BuchnerHmkDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "buchner_hmk_digital",
        name: "Buchner HMK Digital",
        description: "i18n.collectors.buchner_hmk_digital.description",
        version: "0",
        website: "https://www.heilmittelkatalog.app/account-einstellungen/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3032904.jpg",
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
        entryUrl: "https://www.heilmittelkatalog.app/account-einstellungen/billing",
    }

    constructor() {
        super(BuchnerHmkDigitalCollector.CONFIG);
    }
}
