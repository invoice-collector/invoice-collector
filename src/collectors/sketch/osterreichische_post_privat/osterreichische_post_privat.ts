
import { SketchCollector } from '../../sketchCollector';

export class OsterreichischePostPrivatCollector extends SketchCollector {

    static CONFIG = {
        id: "osterreichische_post_privat",
        name: "Osterreichische Post Privat",
        description: "i18n.collectors.osterreichische_post_privat.description",
        version: "0",
        website: "https://www.post.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773776.jpg",
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
        entryUrl: "https://www.post.at",
    }

    constructor() {
        super(OsterreichischePostPrivatCollector.CONFIG);
    }
}
