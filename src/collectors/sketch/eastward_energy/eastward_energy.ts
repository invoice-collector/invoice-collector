
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EastwardEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "eastward_energy",
        name: "Eastward Energy",
        description: "i18n.collectors.eastward_energy.description",
        version: "0",
        website: "https://myaccount.eastwardenergy.com/AccountSummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472173.jpg",
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
        entryUrl: "https://myaccount.eastwardenergy.com/AccountSummary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EastwardEnergyCollector.CONFIG);
    }
}
