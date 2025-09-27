
import { SketchCollector } from '../../sketchCollector';

export class SmartestenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "smartestenergy",
        name: "smartestenergy",
        description: "i18n.collectors.smartestenergy.description",
        version: "0",
        website: "https://smartweb.smartestenergy.com/Account/LogIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899957.jpg",
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
        entryUrl: "https://smartweb.smartestenergy.com/Account/LogIn",
    }

    constructor() {
        super(SmartestenergyCollector.CONFIG);
    }
}
