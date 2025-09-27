
import { SketchCollector } from '../../sketchCollector';

export class AllianzFrCollector extends SketchCollector {

    static CONFIG = {
        id: "allianz_fr",
        name: "Allianz.fr",
        description: "i18n.collectors.allianz_fr.description",
        version: "0",
        website: "https://www.allianz.fr/mon-espace-client/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102529.jpg",
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
        entryUrl: "https://www.allianz.fr/mon-espace-client/",
    }

    constructor() {
        super(AllianzFrCollector.CONFIG);
    }
}
