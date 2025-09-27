
import { SketchCollector } from '../../sketchCollector';

export class AsAbrechnungsstelleAgCollector extends SketchCollector {

    static CONFIG = {
        id: "as_abrechnungsstelle_ag",
        name: "AS Abrechnungsstelle AG",
        description: "i18n.collectors.as_abrechnungsstelle_ag.description",
        version: "0",
        website: "https://kunden.as-bremen.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389828.jpg",
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
        entryUrl: "https://kunden.as-bremen.de/",
    }

    constructor() {
        super(AsAbrechnungsstelleAgCollector.CONFIG);
    }
}
