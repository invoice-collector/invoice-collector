
import { SketchCollector } from '../../sketchCollector';

export class LePetitVapoteurCollector extends SketchCollector {

    static CONFIG = {
        id: "le_petit_vapoteur",
        name: "Le Petit Vapoteur",
        description: "i18n.collectors.le_petit_vapoteur.description",
        version: "0",
        website: "https://www.lepetitvapoteur.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121256.jpg",
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
        entryUrl: "https://www.lepetitvapoteur.com/fr/",
    }

    constructor() {
        super(LePetitVapoteurCollector.CONFIG);
    }
}
