
import { SketchCollector } from '../../sketchCollector';

export class MidjourneyCollector extends SketchCollector {

    static CONFIG = {
        id: "midjourney",
        name: "Midjourney",
        description: "i18n.collectors.midjourney.description",
        version: "0",
        website: "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1675303.jpg",
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
        entryUrl: "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
    }

    constructor() {
        super(MidjourneyCollector.CONFIG);
    }
}
