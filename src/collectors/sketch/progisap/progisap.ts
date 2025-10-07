
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProgisapCollector extends SketchCollector {

    static CONFIG = {
        id: "progisap",
        name: "ProgiSAP",
        description: "i18n.collectors.progisap.description",
        version: "0",
        website: "http://www.progisap.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138189.jpg",
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
        entryUrl: "http://www.progisap.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProgisapCollector.CONFIG);
    }
}
