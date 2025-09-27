
import { SketchCollector } from '../../sketchCollector';

export class LivestormCollector extends SketchCollector {

    static CONFIG = {
        id: "livestorm",
        name: "Livestorm",
        description: "i18n.collectors.livestorm.description",
        version: "0",
        website: "https://app.livestorm.co/#/settings?page=settings&tab=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/514927.jpg",
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
        entryUrl: "https://app.livestorm.co/#/settings?page=settings&tab=billing",
    }

    constructor() {
        super(LivestormCollector.CONFIG);
    }
}
