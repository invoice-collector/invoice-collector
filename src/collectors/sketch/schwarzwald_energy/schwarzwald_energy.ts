
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchwarzwaldEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "schwarzwald_energy",
        name: "Schwarzwald Energy",
        description: "i18n.collectors.schwarzwald_energy.description",
        version: "0",
        website: "https://kundencenter.schwarzwald-energy.de/csit/action/csShowInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246695.jpg",
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
        entryUrl: "https://kundencenter.schwarzwald-energy.de/csit/action/csShowInvoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchwarzwaldEnergyCollector.CONFIG);
    }
}
