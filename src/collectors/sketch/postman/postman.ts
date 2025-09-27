
import { SketchCollector } from '../../sketchCollector';

export class PostmanCollector extends SketchCollector {

    static CONFIG = {
        id: "postman",
        name: "Postman",
        description: "i18n.collectors.postman.description",
        version: "0",
        website: "https://www.getpostman.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6713.jpg",
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
        entryUrl: "https://www.getpostman.com/",
    }

    constructor() {
        super(PostmanCollector.CONFIG);
    }
}
