
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WobcomCollector extends SketchCollector {

    static CONFIG = {
        id: "wobcom",
        name: "WOBCOM",
        description: "i18n.collectors.wobcom.description",
        version: "0",
        website: "http://www.wobcom.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9196.jpg",
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
        entryUrl: "http://www.wobcom.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WobcomCollector.CONFIG);
    }
}
