
import { SketchCollector } from '../../sketchCollector';

export class DropsendCollector extends SketchCollector {

    static CONFIG = {
        id: "dropsend",
        name: "DropSend",
        description: "i18n.collectors.dropsend.description",
        version: "0",
        website: "https://myaccount.dropsend.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51420.jpg",
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
        entryUrl: "https://myaccount.dropsend.com/login",
    }

    constructor() {
        super(DropsendCollector.CONFIG);
    }
}
