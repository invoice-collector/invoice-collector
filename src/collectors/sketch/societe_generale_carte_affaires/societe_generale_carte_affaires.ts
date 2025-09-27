
import { SketchCollector } from '../../sketchCollector';

export class SocieteGeneraleCarteAffairesCollector extends SketchCollector {

    static CONFIG = {
        id: "societe_generale_carte_affaires",
        name: "Societe Generale - Carte affaires",
        description: "i18n.collectors.societe_generale_carte_affaires.description",
        version: "0",
        website: "https://www.sogecartenet.fr/fre/index.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115745.jpg",
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
        entryUrl: "https://www.sogecartenet.fr/fre/index.htm",
    }

    constructor() {
        super(SocieteGeneraleCarteAffairesCollector.CONFIG);
    }
}
