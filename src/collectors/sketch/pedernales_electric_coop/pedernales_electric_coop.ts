
import { SketchCollector } from '../../sketchCollector';

export class PedernalesElectricCoopCollector extends SketchCollector {

    static CONFIG = {
        id: "pedernales_electric_coop",
        name: "Pedernales Electric Coop",
        description: "i18n.collectors.pedernales_electric_coop.description",
        version: "0",
        website: "https://pec.smarthub.coop/ui/#/billingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4700110.jpg",
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
        entryUrl: "https://pec.smarthub.coop/ui/#/billingHistory",
    }

    constructor() {
        super(PedernalesElectricCoopCollector.CONFIG);
    }
}
