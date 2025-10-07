
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InteractCollector extends SketchCollector {

    static CONFIG = {
        id: "interact",
        name: "interact",
        description: "i18n.collectors.interact.description",
        version: "0",
        website: "https://dashboard.tryinteract.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/791519.jpg",
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
        entryUrl: "https://dashboard.tryinteract.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InteractCollector.CONFIG);
    }
}
