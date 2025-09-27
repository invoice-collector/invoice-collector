
import { SketchCollector } from '../../sketchCollector';

export class LesHarasNationauxParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "les_haras_nationaux_particulier",
        name: "Les Haras Nationaux - particulier",
        description: "i18n.collectors.les_haras_nationaux_particulier.description",
        version: "0",
        website: "https://sso.haras-nationaux.fr/cas/login?service=https%3A%2F%2Fwww.haras-nationaux.fr%2Findex.php%3Fid%3D5809%26retour_url%3D%252Fespace-personnalise%252F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107138.jpg",
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
        entryUrl: "https://sso.haras-nationaux.fr/cas/login?service=https%3A%2F%2Fwww.haras-nationaux.fr%2Findex.php%3Fid%3D5809%26retour_url%3D%252Fespace-personnalise%252F",
    }

    constructor() {
        super(LesHarasNationauxParticulierCollector.CONFIG);
    }
}
