
import { SketchCollector } from '../../sketchCollector';

export class Blog2socialCollector extends SketchCollector {

    static CONFIG = {
        id: "blog2social",
        name: "Blog2Social",
        description: "i18n.collectors.blog2social.description",
        version: "0",
        website: "https://service.blog2social.com/de/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73029.jpg",
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
        entryUrl: "https://service.blog2social.com/de/user/invoices",
    }

    constructor() {
        super(Blog2socialCollector.CONFIG);
    }
}
