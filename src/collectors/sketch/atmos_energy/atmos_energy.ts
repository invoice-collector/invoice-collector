
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AtmosEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "atmos_energy",
        name: "Atmos Energy",
        description: "i18n.collectors.atmos_energy.description",
        version: "0",
        website: "https://www.atmosenergy.com/accountcenter/finance/FinancialTransaction.html?activeTab=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178475.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.atmosenergy.com/accountcenter/finance/FinancialTransaction.html?activeTab=2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtmosEnergyCollector.CONFIG);
    }
}
