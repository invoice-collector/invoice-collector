
import { SketchCollector } from '../../sketchCollector';

export class CargoboardCollector extends SketchCollector {

    static CONFIG = {
        id: "cargoboard",
        name: "Cargoboard",
        description: "i18n.collectors.cargoboard.description",
        version: "0",
        website: "http://www.cargoboard.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132716.jpg",
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
        entryUrl: "http://www.cargoboard.de",
    }

    constructor() {
        super(CargoboardCollector.CONFIG);
    }
}
