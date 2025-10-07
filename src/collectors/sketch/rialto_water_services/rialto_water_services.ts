
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RialtoWaterServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "rialto_water_services",
        name: "Rialto Water Services",
        description: "i18n.collectors.rialto_water_services.description",
        version: "0",
        website: "https://www.onlinebiller.com/rialtows/statements.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723372.jpg",
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
        entryUrl: "https://www.onlinebiller.com/rialtows/statements.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RialtoWaterServicesCollector.CONFIG);
    }
}
