
import { SketchCollector } from '../../sketchCollector';

export class LEtudiantCollector extends SketchCollector {

    static CONFIG = {
        id: "l_etudiant",
        name: "L\'etudiant",
        description: "i18n.collectors.l_etudiant.description",
        version: "0",
        website: "https://www.letudiant.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120397.jpg",
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
        entryUrl: "https://www.letudiant.fr/",
    }

    constructor() {
        super(LEtudiantCollector.CONFIG);
    }
}
