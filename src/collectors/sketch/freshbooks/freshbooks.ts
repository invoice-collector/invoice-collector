
import { SketchCollector } from '../../sketchCollector';

export class FreshbooksCollector extends SketchCollector {

    static CONFIG = {
        id: "freshbooks",
        name: "FreshBooks",
        description: "i18n.collectors.freshbooks.description",
        version: "0",
        website: "https://secure.freshbooks.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9333.jpg",
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
        entryUrl: "https://secure.freshbooks.com/login/",
    }

    constructor() {
        super(FreshbooksCollector.CONFIG);
    }
}
