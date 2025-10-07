
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimpelNlCollector extends SketchCollector {

    static CONFIG = {
        id: "simpel_nl",
        name: "Simpel.nl",
        description: "i18n.collectors.simpel_nl.description",
        version: "0",
        website: "https://mijn.simpel.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9556.jpg",
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
        entryUrl: "https://mijn.simpel.nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimpelNlCollector.CONFIG);
    }
}
