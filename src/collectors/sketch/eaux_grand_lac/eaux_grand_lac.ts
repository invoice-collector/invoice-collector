
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EauxGrandLacCollector extends SketchCollector {

    static CONFIG = {
        id: "eaux_grand_lac",
        name: "EAUX GRAND LAC",
        description: "i18n.collectors.eaux_grand_lac.description",
        version: "0",
        website: "https://portail-eau.grand-lac.fr/wp/home.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415656.jpg",
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
        entryUrl: "https://portail-eau.grand-lac.fr/wp/home.action",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauxGrandLacCollector.CONFIG);
    }
}
