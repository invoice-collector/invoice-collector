
import { SketchCollector } from '../../sketchCollector';

export class NiftypluginsCollector extends SketchCollector {

    static CONFIG = {
        id: "niftyplugins",
        name: "NiftyPlugins",
        description: "i18n.collectors.niftyplugins.description",
        version: "0",
        website: "https://niftyplugins.com/account/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203897.jpg",
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
        entryUrl: "https://niftyplugins.com/account/purchases/",
    }

    constructor() {
        super(NiftypluginsCollector.CONFIG);
    }
}
