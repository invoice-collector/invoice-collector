
import { SketchCollector } from '../../sketchCollector';

export class B2vRetraitePrevoyanceParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "b2v_retraite_prevoyance_particuliers",
        name: "B2V Retraite Prevoyance Particuliers",
        description: "i18n.collectors.b2v_retraite_prevoyance_particuliers.description",
        version: "0",
        website: "https://www.b2v.fr/particuliers/espace-client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105271.jpg",
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
        entryUrl: "https://www.b2v.fr/particuliers/espace-client",
    }

    constructor() {
        super(B2vRetraitePrevoyanceParticuliersCollector.CONFIG);
    }
}
