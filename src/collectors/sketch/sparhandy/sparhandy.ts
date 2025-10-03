
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SparhandyCollector extends SketchCollector {

    static CONFIG = {
        id: "sparhandy",
        name: "Sparhandy",
        description: "i18n.collectors.sparhandy.description",
        version: "0",
        website: "https://www.sparhandy.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9159.jpg",
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
        entryUrl: "https://www.sparhandy.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SparhandyCollector.CONFIG);
    }
}
