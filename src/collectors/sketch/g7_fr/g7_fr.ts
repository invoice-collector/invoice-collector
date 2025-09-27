
import { SketchCollector } from '../../sketchCollector';

export class G7FrCollector extends SketchCollector {

    static CONFIG = {
        id: "g7_fr",
        name: "G7.fr",
        description: "i18n.collectors.g7_fr.description",
        version: "0",
        website: "https://www.g7.fr/tableau-de-bord/historique-de-courses",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61369.jpg",
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
        entryUrl: "https://www.g7.fr/tableau-de-bord/historique-de-courses",
    }

    constructor() {
        super(G7FrCollector.CONFIG);
    }
}
