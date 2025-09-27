
import { SketchCollector } from '../../sketchCollector';

export class FifthThirdBankCollector extends SketchCollector {

    static CONFIG = {
        id: "fifth_third_bank",
        name: "Fifth Third Bank",
        description: "i18n.collectors.fifth_third_bank.description",
        version: "0",
        website: "https://onlinebanking.53.com/olb/#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519915.jpg",
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
        entryUrl: "https://onlinebanking.53.com/olb/#/documents",
    }

    constructor() {
        super(FifthThirdBankCollector.CONFIG);
    }
}
