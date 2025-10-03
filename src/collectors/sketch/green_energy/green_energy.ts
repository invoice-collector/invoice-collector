
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GreenEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "green_energy",
        name: "Green Energy",
        description: "i18n.collectors.green_energy.description",
        version: "0",
        website: "http://www.greenenergyuk.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8680.jpg",
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
        entryUrl: "http://www.greenenergyuk.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreenEnergyCollector.CONFIG);
    }
}
