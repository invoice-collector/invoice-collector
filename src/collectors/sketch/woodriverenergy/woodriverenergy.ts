
import { SketchCollector } from '../../sketchCollector';

export class WoodriverenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "woodriverenergy",
        name: "Woodriverenergy",
        description: "i18n.collectors.woodriverenergy.description",
        version: "0",
        website: "https://sso.woodriverenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382668.jpg",
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
        entryUrl: "https://sso.woodriverenergy.com",
    }

    constructor() {
        super(WoodriverenergyCollector.CONFIG);
    }
}
