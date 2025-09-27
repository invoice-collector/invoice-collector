
import { SketchCollector } from '../../sketchCollector';

export class EverreachCollector extends SketchCollector {

    static CONFIG = {
        id: "everreach",
        name: "everreach",
        description: "i18n.collectors.everreach.description",
        version: "0",
        website: "http://everreach.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9222.jpg",
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
        entryUrl: "http://everreach.co.uk",
    }

    constructor() {
        super(EverreachCollector.CONFIG);
    }
}
