
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CallrailCollector extends SketchCollector {

    static CONFIG = {
        id: "callrail",
        name: "CallRail",
        description: "i18n.collectors.callrail.description",
        version: "0",
        website: "https://app.callrail.com/settings/a/292910140/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449912.jpg",
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
        entryUrl: "https://app.callrail.com/settings/a/292910140/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CallrailCollector.CONFIG);
    }
}
