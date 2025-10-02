
import { SketchCollector } from '../../sketchCollector';

export class MinkBurstenFrCollector extends SketchCollector {

    static CONFIG = {
        id: "mink_bursten_fr",
        name: "Mink Bursten (.fr)",
        description: "i18n.collectors.mink_bursten_fr.description",
        version: "0",
        website: "https://www.mink-buersten.com/fr/connexionpanier-darticles/connexion-form.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522390.jpg",
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
        entryUrl: "https://www.mink-buersten.com/fr/connexionpanier-darticles/connexion-form.html",
    }

    constructor() {
        super(MinkBurstenFrCollector.CONFIG);
    }
}
