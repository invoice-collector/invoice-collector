
import { SketchCollector } from '../../sketchCollector';

export class ShogoCollector extends SketchCollector {

    static CONFIG = {
        id: "shogo",
        name: "Shogo",
        description: "i18n.collectors.shogo.description",
        version: "0",
        website: "https://app.shogo.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/966878.jpg",
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
        entryUrl: "https://app.shogo.io/login",
    }

    constructor() {
        super(ShogoCollector.CONFIG);
    }
}
