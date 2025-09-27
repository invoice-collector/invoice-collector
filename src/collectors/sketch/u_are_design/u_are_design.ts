
import { SketchCollector } from '../../sketchCollector';

export class UAreDesignCollector extends SketchCollector {

    static CONFIG = {
        id: "u_are_design",
        name: "U are design",
        description: "i18n.collectors.u_are_design.description",
        version: "0",
        website: "https://www.uaredesign.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123517.jpg",
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
        entryUrl: "https://www.uaredesign.com/customer/account/login/",
    }

    constructor() {
        super(UAreDesignCollector.CONFIG);
    }
}
