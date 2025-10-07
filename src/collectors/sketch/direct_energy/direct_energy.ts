
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DirectEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_energy",
        name: "Direct Energy",
        description: "i18n.collectors.direct_energy.description",
        version: "0",
        website: "https://www.directenergy.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8864.jpg",
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
        entryUrl: "https://www.directenergy.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DirectEnergyCollector.CONFIG);
    }
}
