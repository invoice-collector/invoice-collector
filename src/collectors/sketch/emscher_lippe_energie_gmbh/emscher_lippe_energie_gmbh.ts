
import { SketchCollector } from '../../sketchCollector';

export class EmscherLippeEnergieGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "emscher_lippe_energie_gmbh",
        name: "Emscher Lippe Energie GmbH",
        description: "i18n.collectors.emscher_lippe_energie_gmbh.description",
        version: "0",
        website: "https://meine.ele.de/privatkunden/meine-ele/services/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1311108.jpg",
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
        entryUrl: "https://meine.ele.de/privatkunden/meine-ele/services/rechnungen",
    }

    constructor() {
        super(EmscherLippeEnergieGmbhCollector.CONFIG);
    }
}
