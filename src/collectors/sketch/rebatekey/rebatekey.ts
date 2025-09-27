
import { SketchCollector } from '../../sketchCollector';

export class RebatekeyCollector extends SketchCollector {

    static CONFIG = {
        id: "rebatekey",
        name: "RebateKey",
        description: "i18n.collectors.rebatekey.description",
        version: "0",
        website: "https://rebatekey.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811720.jpg",
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
        entryUrl: "https://rebatekey.com/sign-in",
    }

    constructor() {
        super(RebatekeyCollector.CONFIG);
    }
}
