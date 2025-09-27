
import { SketchCollector } from '../../sketchCollector';

export class SmiaPortalAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "smia_portal_adherent",
        name: "SMIA Portal - Adherent",
        description: "i18n.collectors.smia_portal_adherent.description",
        version: "0",
        website: "https://portail.sante-travail.net/MesDocuments/MesFactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503345.jpg",
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
        entryUrl: "https://portail.sante-travail.net/MesDocuments/MesFactures",
    }

    constructor() {
        super(SmiaPortalAdherentCollector.CONFIG);
    }
}
