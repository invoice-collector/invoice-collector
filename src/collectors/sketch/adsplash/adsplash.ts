
import { SketchCollector } from '../../sketchCollector';

export class AdsplashCollector extends SketchCollector {

    static CONFIG = {
        id: "adsplash",
        name: "Adsplash",
        description: "i18n.collectors.adsplash.description",
        version: "0",
        website: "https://netzwerk.adsplash.de/modules/affili/frontend/de/user/auszahlungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776444.jpg",
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
        entryUrl: "https://netzwerk.adsplash.de/modules/affili/frontend/de/user/auszahlungen.html",
    }

    constructor() {
        super(AdsplashCollector.CONFIG);
    }
}
