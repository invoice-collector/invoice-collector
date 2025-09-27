
import { SketchCollector } from '../../sketchCollector';

export class ScreenleapCollector extends SketchCollector {

    static CONFIG = {
        id: "screenleap",
        name: "screenleap",
        description: "i18n.collectors.screenleap.description",
        version: "0",
        website: "https://www.screenleap.com/subscription/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60389.jpg",
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
        entryUrl: "https://www.screenleap.com/subscription/payments",
    }

    constructor() {
        super(ScreenleapCollector.CONFIG);
    }
}
