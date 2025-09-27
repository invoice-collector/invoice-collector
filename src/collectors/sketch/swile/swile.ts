
import { SketchCollector } from '../../sketchCollector';

export class SwileCollector extends SketchCollector {

    static CONFIG = {
        id: "swile",
        name: "Swile",
        description: "i18n.collectors.swile.description",
        version: "0",
        website: "https://app.swile.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/228714.jpg",
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
        entryUrl: "https://app.swile.co/",
    }

    constructor() {
        super(SwileCollector.CONFIG);
    }
}
