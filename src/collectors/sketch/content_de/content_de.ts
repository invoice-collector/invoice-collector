
import { SketchCollector } from '../../sketchCollector';

export class ContentDeCollector extends SketchCollector {

    static CONFIG = {
        id: "content_de",
        name: "Content.de",
        description: "i18n.collectors.content_de.description",
        version: "0",
        website: "https://www.content.de/common/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399.jpg",
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
        entryUrl: "https://www.content.de/common/login",
    }

    constructor() {
        super(ContentDeCollector.CONFIG);
    }
}
