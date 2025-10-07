
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarktplaatsNlCollector extends SketchCollector {

    static CONFIG = {
        id: "marktplaats_nl",
        name: "Marktplaats.nl",
        description: "i18n.collectors.marktplaats_nl.description",
        version: "0",
        website: "https://www.marktplaats.nl/account/login.html?target=https%3A%2F%2Fwww.marktplaats.nl%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24905.jpg",
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
        entryUrl: "https://www.marktplaats.nl/account/login.html?target=https%3A%2F%2Fwww.marktplaats.nl%2F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarktplaatsNlCollector.CONFIG);
    }
}
