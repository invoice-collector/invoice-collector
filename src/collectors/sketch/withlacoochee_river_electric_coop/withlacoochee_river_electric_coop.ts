
import { SketchCollector } from '../../sketchCollector';

export class WithlacoocheeRiverElectricCoopCollector extends SketchCollector {

    static CONFIG = {
        id: "withlacoochee_river_electric_coop",
        name: "Withlacoochee River Electric Coop",
        description: "i18n.collectors.withlacoochee_river_electric_coop.description",
        version: "0",
        website: "https://withlacoochee.smarthub.coop/Login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2549322.jpg",
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
        entryUrl: "https://withlacoochee.smarthub.coop/Login.html",
    }

    constructor() {
        super(WithlacoocheeRiverElectricCoopCollector.CONFIG);
    }
}
