
import { SketchCollector } from '../../sketchCollector';

export class HotglooGbrCollector extends SketchCollector {

    static CONFIG = {
        id: "hotgloo_gbr",
        name: "HotGloo GbR",
        description: "i18n.collectors.hotgloo_gbr.description",
        version: "0",
        website: "https://hotgloo.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148970.jpg",
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
        entryUrl: "https://hotgloo.io/",
    }

    constructor() {
        super(HotglooGbrCollector.CONFIG);
    }
}
