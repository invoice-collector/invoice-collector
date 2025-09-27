
import { SketchCollector } from '../../sketchCollector';

export class RecurlyCollector extends SketchCollector {

    static CONFIG = {
        id: "recurly",
        name: "Recurly",
        description: "i18n.collectors.recurly.description",
        version: "0",
        website: "https://app.recurly.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10088.jpg",
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
        entryUrl: "https://app.recurly.com/login",
    }

    constructor() {
        super(RecurlyCollector.CONFIG);
    }
}
