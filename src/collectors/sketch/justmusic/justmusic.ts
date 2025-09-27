
import { SketchCollector } from '../../sketchCollector';

export class JustmusicCollector extends SketchCollector {

    static CONFIG = {
        id: "justmusic",
        name: "Justmusic",
        description: "i18n.collectors.justmusic.description",
        version: "0",
        website: "https://www.justmusic.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/174938.jpg",
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
        entryUrl: "https://www.justmusic.de/",
    }

    constructor() {
        super(JustmusicCollector.CONFIG);
    }
}
