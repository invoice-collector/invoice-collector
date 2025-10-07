
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BcRemoteCollector extends SketchCollector {

    static CONFIG = {
        id: "bc_remote",
        name: "BC-Remote",
        description: "i18n.collectors.bc_remote.description",
        version: "0",
        website: "https://www.bc-remote.com/de/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1322330.jpg",
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
        entryUrl: "https://www.bc-remote.com/de/account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BcRemoteCollector.CONFIG);
    }
}
