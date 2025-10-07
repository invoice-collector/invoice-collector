
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WhalesyncCollector extends SketchCollector {

    static CONFIG = {
        id: "whalesync",
        name: "whalesync",
        description: "i18n.collectors.whalesync.description",
        version: "0",
        website: "https://app.whalesync.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973402.jpg",
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
        entryUrl: "https://app.whalesync.com/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhalesyncCollector.CONFIG);
    }
}
