
import { SketchCollector } from '../../sketchCollector';

export class AkerysComptesRenduDeGestionCollector extends SketchCollector {

    static CONFIG = {
        id: "akerys_comptes_rendu_de_gestion",
        name: "Akerys - comptes rendu de gestion",
        description: "i18n.collectors.akerys_comptes_rendu_de_gestion.description",
        version: "0",
        website: "http://www.akerys-promotion.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108150.jpg",
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
        entryUrl: "http://www.akerys-promotion.com/",
    }

    constructor() {
        super(AkerysComptesRenduDeGestionCollector.CONFIG);
    }
}
