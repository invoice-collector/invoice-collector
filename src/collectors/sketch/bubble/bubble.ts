
import { SketchCollector } from '../../sketchCollector';

export class BubbleCollector extends SketchCollector {

    static CONFIG = {
        id: "bubble",
        name: "bubble",
        description: "i18n.collectors.bubble.description",
        version: "0",
        website: "https://www.bubble.is",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57724.jpg",
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
        entryUrl: "https://www.bubble.is",
    }

    constructor() {
        super(BubbleCollector.CONFIG);
    }
}
