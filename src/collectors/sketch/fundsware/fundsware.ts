
import { SketchCollector } from '../../sketchCollector';

export class FundswareCollector extends SketchCollector {

    static CONFIG = {
        id: "fundsware",
        name: "Fundsware",
        description: "i18n.collectors.fundsware.description",
        version: "0",
        website: "https://www.fundsware.de/fwpro/content/investment_provisionsabrechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2554839.jpg",
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
        entryUrl: "https://www.fundsware.de/fwpro/content/investment_provisionsabrechnung",
    }

    constructor() {
        super(FundswareCollector.CONFIG);
    }
}
