
import { SketchCollector } from '../../sketchCollector';

export class Check24ConsumerCollector extends SketchCollector {

    static CONFIG = {
        id: "check24_consumer",
        name: "Check24 Consumer",
        description: "i18n.collectors.check24_consumer.description",
        version: "0",
        website: "https://kundenbereich.check24.de/index.html?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17350.jpg",
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
        entryUrl: "https://kundenbereich.check24.de/index.html?",
    }

    constructor() {
        super(Check24ConsumerCollector.CONFIG);
    }
}
