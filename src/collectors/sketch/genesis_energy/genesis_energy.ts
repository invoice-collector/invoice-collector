
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GenesisEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "genesis_energy",
        name: "Genesis Energy",
        description: "i18n.collectors.genesis_energy.description",
        version: "0",
        website: "https://myaccount.genesisenergy.co.nz/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8932.jpg",
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
        entryUrl: "https://myaccount.genesisenergy.co.nz/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GenesisEnergyCollector.CONFIG);
    }
}
