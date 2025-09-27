
import { SketchCollector } from '../../sketchCollector';

export class BkaContentCollector extends SketchCollector {

    static CONFIG = {
        id: "bka_content",
        name: "BKA Content",
        description: "i18n.collectors.bka_content.description",
        version: "0",
        website: "https://www.bkacontent.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16199.jpg",
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
        entryUrl: "https://www.bkacontent.com/my-account/",
    }

    constructor() {
        super(BkaContentCollector.CONFIG);
    }
}
