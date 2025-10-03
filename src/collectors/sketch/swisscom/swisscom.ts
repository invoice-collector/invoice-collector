
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwisscomCollector extends SketchCollector {

    static CONFIG = {
        id: "swisscom",
        name: "Swisscom",
        description: "i18n.collectors.swisscom.description",
        version: "0",
        website: "http://www.swisscom.ch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45439.jpg",
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
        entryUrl: "http://www.swisscom.ch",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwisscomCollector.CONFIG);
    }
}
