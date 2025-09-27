
import { SketchCollector } from '../../sketchCollector';

export class DesertWaterAgencyCollector extends SketchCollector {

    static CONFIG = {
        id: "desert_water_agency",
        name: "Desert Water Agency",
        description: "i18n.collectors.desert_water_agency.description",
        version: "0",
        website: "https://desertwateragencyca.municipalonlinepayments.com/desertwateragencyca/utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176393.jpg",
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
        entryUrl: "https://desertwateragencyca.municipalonlinepayments.com/desertwateragencyca/utilities",
    }

    constructor() {
        super(DesertWaterAgencyCollector.CONFIG);
    }
}
