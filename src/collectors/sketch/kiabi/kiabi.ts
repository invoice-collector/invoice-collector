
import { SketchCollector } from '../../sketchCollector';

export class KiabiCollector extends SketchCollector {

    static CONFIG = {
        id: "kiabi",
        name: "Kiabi",
        description: "i18n.collectors.kiabi.description",
        version: "0",
        website: "https://www.kiabi.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120428.jpg",
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
        entryUrl: "https://www.kiabi.com/",
    }

    constructor() {
        super(KiabiCollector.CONFIG);
    }
}
