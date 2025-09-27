
import { SketchCollector } from '../../sketchCollector';

export class EauDAzurCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_d_azur",
        name: "Eau d'Azur",
        description: "i18n.collectors.eau_d_azur.description",
        version: "0",
        website: "https://ael.eaudazur.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837751.jpg",
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
        entryUrl: "https://ael.eaudazur.com/#/login",
    }

    constructor() {
        super(EauDAzurCollector.CONFIG);
    }
}
