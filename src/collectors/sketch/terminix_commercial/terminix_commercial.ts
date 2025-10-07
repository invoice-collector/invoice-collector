
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TerminixCommercialCollector extends SketchCollector {

    static CONFIG = {
        id: "terminix_commercial",
        name: "Terminix Commercial",
        description: "i18n.collectors.terminix_commercial.description",
        version: "0",
        website: "https://www.terminix.com/my-account/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2526016.jpg",
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
        entryUrl: "https://www.terminix.com/my-account/#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TerminixCommercialCollector.CONFIG);
    }
}
