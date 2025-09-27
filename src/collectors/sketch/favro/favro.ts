
import { SketchCollector } from '../../sketchCollector';

export class FavroCollector extends SketchCollector {

    static CONFIG = {
        id: "favro",
        name: "Favro",
        description: "i18n.collectors.favro.description",
        version: "0",
        website: "https://favro.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52183.jpg",
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
        entryUrl: "https://favro.com/login",
    }

    constructor() {
        super(FavroCollector.CONFIG);
    }
}
