
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AccessallyCollector extends SketchCollector {

    static CONFIG = {
        id: "accessally",
        name: "Accessally",
        description: "i18n.collectors.accessally.description",
        version: "0",
        website: "https://access.accessally.com/my-account/my-orders-and-subscriptions/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203076.jpg",
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
        entryUrl: "https://access.accessally.com/my-account/my-orders-and-subscriptions/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AccessallyCollector.CONFIG);
    }
}
