
import { SketchCollector } from '../../sketchCollector';

export class InstacartCollector extends SketchCollector {

    static CONFIG = {
        id: "instacart",
        name: "Instacart",
        description: "i18n.collectors.instacart.description",
        version: "0",
        website: "http://www.instacart.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27518.jpg",
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
        entryUrl: "http://www.instacart.com",
    }

    constructor() {
        super(InstacartCollector.CONFIG);
    }
}
