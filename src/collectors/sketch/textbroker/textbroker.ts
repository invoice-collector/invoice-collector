
import { SketchCollector } from '../../sketchCollector';

export class TextbrokerCollector extends SketchCollector {

    static CONFIG = {
        id: "textbroker",
        name: "TextBroker",
        description: "i18n.collectors.textbroker.description",
        version: "0",
        website: "https://intern.textbroker.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/414.jpg",
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
        entryUrl: "https://intern.textbroker.de/login",
    }

    constructor() {
        super(TextbrokerCollector.CONFIG);
    }
}
