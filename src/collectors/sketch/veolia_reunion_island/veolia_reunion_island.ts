
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VeoliaReunionIslandCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_reunion_island",
        name: "Veolia Reunion Island",
        description: "i18n.collectors.veolia_reunion_island.description",
        version: "0",
        website: "https://www.service.eau.veolia.fr/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/383295.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.service.eau.veolia.fr/home.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VeoliaReunionIslandCollector.CONFIG);
    }
}
