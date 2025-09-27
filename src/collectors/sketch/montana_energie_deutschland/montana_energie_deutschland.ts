
import { SketchCollector } from '../../sketchCollector';

export class MontanaEnergieDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "montana_energie_deutschland",
        name: "Montana Energie Deutschland",
        description: "i18n.collectors.montana_energie_deutschland.description",
        version: "0",
        website: "https://www.montana-energie.de/privatkunden/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132299.jpg",
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
        entryUrl: "https://www.montana-energie.de/privatkunden/",
    }

    constructor() {
        super(MontanaEnergieDeutschlandCollector.CONFIG);
    }
}
