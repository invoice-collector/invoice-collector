
import { SketchCollector } from '../../sketchCollector';

export class TecoTampaElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "teco_tampa_electric",
        name: "TECO - Tampa Electric",
        description: "i18n.collectors.teco_tampa_electric.description",
        version: "0",
        website: "https://account.tecoenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035393.jpg",
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
        entryUrl: "https://account.tecoenergy.com",
    }

    constructor() {
        super(TecoTampaElectricCollector.CONFIG);
    }
}
