
import { SketchCollector } from '../../sketchCollector';

export class CargoInternationalCollector extends SketchCollector {

    static CONFIG = {
        id: "cargo_international",
        name: "Cargo International",
        description: "i18n.collectors.cargo_international.description",
        version: "0",
        website: "https://www.cargointernational.de/mycargo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31646.jpg",
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
        entryUrl: "https://www.cargointernational.de/mycargo",
    }

    constructor() {
        super(CargoInternationalCollector.CONFIG);
    }
}
