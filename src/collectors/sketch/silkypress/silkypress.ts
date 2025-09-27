
import { SketchCollector } from '../../sketchCollector';

export class SilkypressCollector extends SketchCollector {

    static CONFIG = {
        id: "silkypress",
        name: "SilkyPress",
        description: "i18n.collectors.silkypress.description",
        version: "0",
        website: "https://www.silkypress.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/780350.jpg",
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
        entryUrl: "https://www.silkypress.com/my-account/",
    }

    constructor() {
        super(SilkypressCollector.CONFIG);
    }
}
