
import { SketchCollector } from '../../sketchCollector';

export class BrabantWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "brabant_water",
        name: "Brabant Water",
        description: "i18n.collectors.brabant_water.description",
        version: "0",
        website: "https://mijn.brabantwater.nl/Paginas/Inloggen.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32253.jpg",
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
        entryUrl: "https://mijn.brabantwater.nl/Paginas/Inloggen.aspx",
    }

    constructor() {
        super(BrabantWaterCollector.CONFIG);
    }
}
