
import { SketchCollector } from '../../sketchCollector';

export class SummerEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "summer_energy",
        name: "Summer Energy",
        description: "i18n.collectors.summer_energy.description",
        version: "0",
        website: "https://www.summerenergy.com/MyAccount/Billing/Statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510851.jpg",
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
        entryUrl: "https://www.summerenergy.com/MyAccount/Billing/Statements",
    }

    constructor() {
        super(SummerEnergyCollector.CONFIG);
    }
}
