
import { SketchCollector } from '../../sketchCollector';

export class ElPasoElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "el_paso_electric",
        name: "El Paso Electric",
        description: "i18n.collectors.el_paso_electric.description",
        version: "0",
        website: "https://myaccount.epelectric.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203382.jpg",
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
        entryUrl: "https://myaccount.epelectric.com/",
    }

    constructor() {
        super(ElPasoElectricCollector.CONFIG);
    }
}
