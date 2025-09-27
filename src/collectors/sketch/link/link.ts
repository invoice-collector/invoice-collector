
import { SketchCollector } from '../../sketchCollector';

export class LinkCollector extends SketchCollector {

    static CONFIG = {
        id: "link",
        name: "Link",
        description: "i18n.collectors.link.description",
        version: "0",
        website: "https://app.link.com/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4561951.jpg",
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
        entryUrl: "https://app.link.com/purchases",
    }

    constructor() {
        super(LinkCollector.CONFIG);
    }
}
