
import { SketchCollector } from '../../sketchCollector';

export class NuozCollector extends SketchCollector {

    static CONFIG = {
        id: "nuoz",
        name: "NuOz",
        description: "i18n.collectors.nuoz.description",
        version: "0",
        website: "http://nuoz.com/customer-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8688.jpg",
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
        entryUrl: "http://nuoz.com/customer-login/",
    }

    constructor() {
        super(NuozCollector.CONFIG);
    }
}
