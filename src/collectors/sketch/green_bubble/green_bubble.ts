
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GreenBubbleCollector extends SketchCollector {

    static CONFIG = {
        id: "green_bubble",
        name: "Green-Bubble",
        description: "i18n.collectors.green_bubble.description",
        version: "0",
        website: "https://www.green-bubble.com/de/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799129.jpg",
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
        entryUrl: "https://www.green-bubble.com/de/account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreenBubbleCollector.CONFIG);
    }
}
