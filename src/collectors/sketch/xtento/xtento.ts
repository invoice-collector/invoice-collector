
import { SketchCollector } from '../../sketchCollector';

export class XtentoCollector extends SketchCollector {

    static CONFIG = {
        id: "xtento",
        name: "Xtento",
        description: "i18n.collectors.xtento.description",
        version: "0",
        website: "https://www.xtento.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3111134.jpg",
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
        entryUrl: "https://www.xtento.com/customer/account/login/",
    }

    constructor() {
        super(XtentoCollector.CONFIG);
    }
}
