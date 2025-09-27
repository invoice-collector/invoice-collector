
import { SketchCollector } from '../../sketchCollector';

export class SubscribersComCollector extends SketchCollector {

    static CONFIG = {
        id: "subscribers_com",
        name: "subscribers.com",
        description: "i18n.collectors.subscribers_com.description",
        version: "0",
        website: "https://app.subscribers.com/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236273.jpg",
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
        entryUrl: "https://app.subscribers.com/settings",
    }

    constructor() {
        super(SubscribersComCollector.CONFIG);
    }
}
