
import { SketchCollector } from '../../sketchCollector';

export class SpireEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "spire_energy",
        name: "Spire Energy",
        description: "i18n.collectors.spire_energy.description",
        version: "0",
        website: "https://www.spireenergy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747710.jpg",
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
        entryUrl: "https://www.spireenergy.com/",
    }

    constructor() {
        super(SpireEnergyCollector.CONFIG);
    }
}
