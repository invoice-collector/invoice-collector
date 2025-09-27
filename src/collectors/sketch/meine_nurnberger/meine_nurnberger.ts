
import { SketchCollector } from '../../sketchCollector';

export class MeineNurnbergerCollector extends SketchCollector {

    static CONFIG = {
        id: "meine_nurnberger",
        name: "Meine Nurnberger",
        description: "i18n.collectors.meine_nurnberger.description",
        version: "0",
        website: "https://meine.nuernberger.de/kunde/pages/startseite.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444764.jpg",
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
        entryUrl: "https://meine.nuernberger.de/kunde/pages/startseite.html",
    }

    constructor() {
        super(MeineNurnbergerCollector.CONFIG);
    }
}
