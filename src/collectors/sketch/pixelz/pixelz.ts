
import { SketchCollector } from '../../sketchCollector';

export class PixelzCollector extends SketchCollector {

    static CONFIG = {
        id: "pixelz",
        name: "Pixelz",
        description: "i18n.collectors.pixelz.description",
        version: "0",
        website: "https://login.pixelz.com/Account#billingStatement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104774.jpg",
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
        entryUrl: "https://login.pixelz.com/Account#billingStatement",
    }

    constructor() {
        super(PixelzCollector.CONFIG);
    }
}
