
import { SketchCollector } from '../../sketchCollector';

export class B2vRetraitePrevoyanceLaFirmeCollector extends SketchCollector {

    static CONFIG = {
        id: "b2v_retraite_prevoyance_la_firme",
        name: "B2V Retraite Prevoyance - la firme",
        description: "i18n.collectors.b2v_retraite_prevoyance_la_firme.description",
        version: "0",
        website: "https://www.b2v.fr/entreprises/espace-client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105262.jpg",
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
        entryUrl: "https://www.b2v.fr/entreprises/espace-client",
    }

    constructor() {
        super(B2vRetraitePrevoyanceLaFirmeCollector.CONFIG);
    }
}
