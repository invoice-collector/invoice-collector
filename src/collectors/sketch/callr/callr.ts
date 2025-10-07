
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CallrCollector extends SketchCollector {

    static CONFIG = {
        id: "callr",
        name: "Callr",
        description: "i18n.collectors.callr.description",
        version: "0",
        website: "https://sso.callr.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2636371.jpg",
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
        entryUrl: "https://sso.callr.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CallrCollector.CONFIG);
    }
}
