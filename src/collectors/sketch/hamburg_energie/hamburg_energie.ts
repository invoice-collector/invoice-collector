
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HamburgEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "hamburg_energie",
        name: "Hamburg Energie",
        description: "i18n.collectors.hamburg_energie.description",
        version: "0",
        website: "https://portal.hamburgenergie.de/powercommerce/hhe/fo/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16848.jpg",
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
        entryUrl: "https://portal.hamburgenergie.de/powercommerce/hhe/fo/start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HamburgEnergieCollector.CONFIG);
    }
}
