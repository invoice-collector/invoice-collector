
import { SketchCollector } from '../../sketchCollector';

export class TouchstoneEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "touchstone_energy",
        name: "Touchstone Energy",
        description: "i18n.collectors.touchstone_energy.description",
        version: "0",
        website: "http://www.touchstoneenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8971.jpg",
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
        entryUrl: "http://www.touchstoneenergy.com",
    }

    constructor() {
        super(TouchstoneEnergyCollector.CONFIG);
    }
}
