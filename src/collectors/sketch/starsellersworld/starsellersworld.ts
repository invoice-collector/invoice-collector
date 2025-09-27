
import { SketchCollector } from '../../sketchCollector';

export class StarsellersworldCollector extends SketchCollector {

    static CONFIG = {
        id: "starsellersworld",
        name: "starsellersworld",
        description: "i18n.collectors.starsellersworld.description",
        version: "0",
        website: "https://ssl.starsellersworld.com/ssw/konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841561.jpg",
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
        entryUrl: "https://ssl.starsellersworld.com/ssw/konto/",
    }

    constructor() {
        super(StarsellersworldCollector.CONFIG);
    }
}
