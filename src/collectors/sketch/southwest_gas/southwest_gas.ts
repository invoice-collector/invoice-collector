
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SouthwestGasCollector extends SketchCollector {

    static CONFIG = {
        id: "southwest_gas",
        name: "Southwest Gas",
        description: "i18n.collectors.southwest_gas.description",
        version: "0",
        website: "https://myaccount.swgas.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8642.jpg",
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
        entryUrl: "https://myaccount.swgas.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SouthwestGasCollector.CONFIG);
    }
}
