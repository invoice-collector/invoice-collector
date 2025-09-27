
import { SketchCollector } from '../../sketchCollector';

export class LeroyMerlinFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "leroy_merlin_france",
        name: "Leroy Merlin France",
        description: "i18n.collectors.leroy_merlin_france.description",
        version: "0",
        website: "https://www.leroymerlin.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405662.jpg",
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
        entryUrl: "https://www.leroymerlin.fr/",
    }

    constructor() {
        super(LeroyMerlinFranceCollector.CONFIG);
    }
}
