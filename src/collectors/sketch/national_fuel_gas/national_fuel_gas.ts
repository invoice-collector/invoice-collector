
import { SketchCollector } from '../../sketchCollector';

export class NationalFuelGasCollector extends SketchCollector {

    static CONFIG = {
        id: "national_fuel_gas",
        name: "National Fuel Gas",
        description: "i18n.collectors.national_fuel_gas.description",
        version: "0",
        website: "http://www.nationalfuelgas.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9338.jpg",
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
        entryUrl: "http://www.nationalfuelgas.com",
    }

    constructor() {
        super(NationalFuelGasCollector.CONFIG);
    }
}
