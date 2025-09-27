
import { SketchCollector } from '../../sketchCollector';

export class IinetCollector extends SketchCollector {

    static CONFIG = {
        id: "iinet",
        name: "iinet",
        description: "i18n.collectors.iinet.description",
        version: "0",
        website: "https://www.iinet.net.au/customers/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405660.jpg",
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
        entryUrl: "https://www.iinet.net.au/customers/",
    }

    constructor() {
        super(IinetCollector.CONFIG);
    }
}
