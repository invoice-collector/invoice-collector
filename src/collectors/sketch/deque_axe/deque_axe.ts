
import { SketchCollector } from '../../sketchCollector';

export class DequeAxeCollector extends SketchCollector {

    static CONFIG = {
        id: "deque_axe",
        name: "Deque Axe",
        description: "i18n.collectors.deque_axe.description",
        version: "0",
        website: "https://axe.deque.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385849.jpg",
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
        entryUrl: "https://axe.deque.com/billing",
    }

    constructor() {
        super(DequeAxeCollector.CONFIG);
    }
}
