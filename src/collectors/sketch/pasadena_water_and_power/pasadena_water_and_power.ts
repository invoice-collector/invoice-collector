
import { SketchCollector } from '../../sketchCollector';

export class PasadenaWaterAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "pasadena_water_and_power",
        name: "Pasadena Water and Power",
        description: "i18n.collectors.pasadena_water_and_power.description",
        version: "0",
        website: "https://myaccount.pwpweb.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178825.jpg",
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
        entryUrl: "https://myaccount.pwpweb.com/",
    }

    constructor() {
        super(PasadenaWaterAndPowerCollector.CONFIG);
    }
}
