
import { SketchCollector } from '../../sketchCollector';

export class CrowWingPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "crow_wing_power",
        name: "Crow Wing Power",
        description: "i18n.collectors.crow_wing_power.description",
        version: "0",
        website: "https://cwpower.smarthub.coop/Login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2526036.jpg",
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
        entryUrl: "https://cwpower.smarthub.coop/Login.html",
    }

    constructor() {
        super(CrowWingPowerCollector.CONFIG);
    }
}
