
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlliantEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "alliant_energy",
        name: "Alliant Energy",
        description: "i18n.collectors.alliant_energy.description",
        version: "0",
        website: "https://myaccount.alliantenergy.com/Portal//BillDashboard.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953790.jpg",
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
        entryUrl: "https://myaccount.alliantenergy.com/Portal//BillDashboard.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlliantEnergyCollector.CONFIG);
    }
}
