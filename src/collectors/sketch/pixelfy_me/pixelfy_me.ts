
import { SketchCollector } from '../../sketchCollector';

export class PixelfyMeCollector extends SketchCollector {

    static CONFIG = {
        id: "pixelfy_me",
        name: "Pixelfy.me",
        description: "i18n.collectors.pixelfy_me.description",
        version: "0",
        website: "https://app.pixelfy.me/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104733.jpg",
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
        entryUrl: "https://app.pixelfy.me/sign-in",
    }

    constructor() {
        super(PixelfyMeCollector.CONFIG);
    }
}
