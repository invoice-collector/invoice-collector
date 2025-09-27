
import { SketchCollector } from '../../sketchCollector';

export class GeekbuyingCollector extends SketchCollector {

    static CONFIG = {
        id: "geekbuying",
        name: "geekbuying",
        description: "i18n.collectors.geekbuying.description",
        version: "0",
        website: "https://www.geekbuying.com/BuyerOrder/Orders?action=History",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/114133.jpg",
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
        entryUrl: "https://www.geekbuying.com/BuyerOrder/Orders?action=History",
    }

    constructor() {
        super(GeekbuyingCollector.CONFIG);
    }
}
