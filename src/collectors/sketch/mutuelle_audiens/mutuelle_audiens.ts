
import { SketchCollector } from '../../sketchCollector';

export class MutuelleAudiensCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_audiens",
        name: "Mutuelle Audiens",
        description: "i18n.collectors.mutuelle_audiens.description",
        version: "0",
        website: "https://www.audiens.org/accueil/espaces-securises.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127366.jpg",
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
        entryUrl: "https://www.audiens.org/accueil/espaces-securises.html",
    }

    constructor() {
        super(MutuelleAudiensCollector.CONFIG);
    }
}
