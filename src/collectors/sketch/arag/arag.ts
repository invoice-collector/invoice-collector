
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AragCollector extends SketchCollector {

    static CONFIG = {
        id: "arag",
        name: "ARAG",
        description: "i18n.collectors.arag.description",
        version: "0",
        website: "https://www.arag.de/meinearag/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/518907.jpg",
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
        entryUrl: "https://www.arag.de/meinearag/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AragCollector.CONFIG);
    }
}
