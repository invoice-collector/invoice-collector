
import { SketchCollector } from '../../sketchCollector';

export class BuzzsproutCollector extends SketchCollector {

    static CONFIG = {
        id: "buzzsprout",
        name: "Buzzsprout",
        description: "i18n.collectors.buzzsprout.description",
        version: "0",
        website: "https://www.buzzsprout.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42954.jpg",
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
        entryUrl: "https://www.buzzsprout.com/login",
    }

    constructor() {
        super(BuzzsproutCollector.CONFIG);
    }
}
