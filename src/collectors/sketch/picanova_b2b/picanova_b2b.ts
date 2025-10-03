
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PicanovaB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "picanova_b2b",
        name: "Picanova B2B",
        description: "i18n.collectors.picanova_b2b.description",
        version: "0",
        website: "https://b2b-shop-eu.picanova.com/de/bestellungen.jsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2183868.jpg",
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
        entryUrl: "https://b2b-shop-eu.picanova.com/de/bestellungen.jsf",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PicanovaB2bCollector.CONFIG);
    }
}
