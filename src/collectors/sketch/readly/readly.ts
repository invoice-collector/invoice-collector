
import { SketchCollector } from '../../sketchCollector';

export class ReadlyCollector extends SketchCollector {

    static CONFIG = {
        id: "readly",
        name: "Readly",
        description: "i18n.collectors.readly.description",
        version: "0",
        website: "https://de.readly.com/accounts/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57869.jpg",
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
        entryUrl: "https://de.readly.com/accounts/subscriptions",
    }

    constructor() {
        super(ReadlyCollector.CONFIG);
    }
}
