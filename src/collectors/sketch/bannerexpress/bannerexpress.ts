
import { SketchCollector } from '../../sketchCollector';

export class BannerexpressCollector extends SketchCollector {

    static CONFIG = {
        id: "bannerexpress",
        name: "BannerExpress",
        description: "i18n.collectors.bannerexpress.description",
        version: "0",
        website: "http://www.bannerexpress.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/486.jpg",
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
        entryUrl: "http://www.bannerexpress.de/",
    }

    constructor() {
        super(BannerexpressCollector.CONFIG);
    }
}
