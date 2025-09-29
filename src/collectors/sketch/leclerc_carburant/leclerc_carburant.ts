
import { SketchCollector } from '../../sketchCollector';

export class LeclercCarburantCollector extends SketchCollector {

    static CONFIG = {
        id: "leclerc_carburant",
        name: "Leclerc Carburant",
        description: "i18n.collectors.leclerc_carburant.description",
        version: "0",
        website: "https://espace.cartecarburant.leclerc/EnergeoSI/client/facture/lister.do?method=rechercher",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421237.jpg",
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
        entryUrl: "https://espace.cartecarburant.leclerc/EnergeoSI/client/facture/lister.do?method=rechercher",
    }

    constructor() {
        super(LeclercCarburantCollector.CONFIG);
    }
}
