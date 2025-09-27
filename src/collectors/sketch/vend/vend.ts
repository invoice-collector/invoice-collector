
import { SketchCollector } from '../../sketchCollector';

export class VendCollector extends SketchCollector {

    static CONFIG = {
        id: "vend",
        name: "vend",
        description: "i18n.collectors.vend.description",
        version: "0",
        website: "https://secure.vendhq.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47495.jpg",
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
        entryUrl: "https://secure.vendhq.com/signin",
    }

    constructor() {
        super(VendCollector.CONFIG);
    }
}
