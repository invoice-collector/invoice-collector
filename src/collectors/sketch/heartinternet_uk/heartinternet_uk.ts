
import { SketchCollector } from '../../sketchCollector';

export class HeartinternetUkCollector extends SketchCollector {

    static CONFIG = {
        id: "heartinternet_uk",
        name: "HeartInternet.uk",
        description: "i18n.collectors.heartinternet_uk.description",
        version: "0",
        website: "https://www.heartinternet.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36578.jpg",
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
        entryUrl: "https://www.heartinternet.uk/login",
    }

    constructor() {
        super(HeartinternetUkCollector.CONFIG);
    }
}
