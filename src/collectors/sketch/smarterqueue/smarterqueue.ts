
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmarterqueueCollector extends SketchCollector {

    static CONFIG = {
        id: "smarterqueue",
        name: "Smarterqueue",
        description: "i18n.collectors.smarterqueue.description",
        version: "0",
        website: "https://smarterqueue.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39074.jpg",
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
        entryUrl: "https://smarterqueue.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmarterqueueCollector.CONFIG);
    }
}
