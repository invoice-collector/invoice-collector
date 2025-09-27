
import { SketchCollector } from '../../sketchCollector';

export class PicanovaApiCollector extends SketchCollector {

    static CONFIG = {
        id: "picanova_api",
        name: "Picanova API",
        description: "i18n.collectors.picanova_api.description",
        version: "0",
        website: "https://api.picanova.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832505.jpg",
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
        entryUrl: "https://api.picanova.com/",
    }

    constructor() {
        super(PicanovaApiCollector.CONFIG);
    }
}
