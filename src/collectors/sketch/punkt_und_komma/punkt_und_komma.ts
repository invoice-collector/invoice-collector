
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PunktUndKommaCollector extends SketchCollector {

    static CONFIG = {
        id: "punkt_und_komma",
        name: "Punkt und Komma",
        description: "i18n.collectors.punkt_und_komma.description",
        version: "0",
        website: "https://punkt-und-komma.net/user/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549039.jpg",
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
        entryUrl: "https://punkt-und-komma.net/user/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PunktUndKommaCollector.CONFIG);
    }
}
