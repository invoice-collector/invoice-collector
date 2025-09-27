
import { SketchCollector } from '../../sketchCollector';

export class ShieldSecurityProCollector extends SketchCollector {

    static CONFIG = {
        id: "shield_security_pro",
        name: "Shield Security Pro",
        description: "i18n.collectors.shield_security_pro.description",
        version: "0",
        website: "https://getshieldsecurity.com/account/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745930.jpg",
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
        entryUrl: "https://getshieldsecurity.com/account/purchase-history/",
    }

    constructor() {
        super(ShieldSecurityProCollector.CONFIG);
    }
}
