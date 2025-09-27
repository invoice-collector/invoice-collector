
import { SketchCollector } from '../../sketchCollector';

export class KelbyoneCollector extends SketchCollector {

    static CONFIG = {
        id: "kelbyone",
        name: "KelbyOne",
        description: "i18n.collectors.kelbyone.description",
        version: "0",
        website: "https://members.kelbyone.com/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759707.jpg",
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
        entryUrl: "https://members.kelbyone.com/account/orders/",
    }

    constructor() {
        super(KelbyoneCollector.CONFIG);
    }
}
