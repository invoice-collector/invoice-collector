
import { SketchCollector } from '../../sketchCollector';

export class LeasedirectCollector extends SketchCollector {

    static CONFIG = {
        id: "leasedirect",
        name: "Leasedirect",
        description: "i18n.collectors.leasedirect.description",
        version: "0",
        website: "https://leasedirect.com/lss/account-summary/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846867.jpg",
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
        entryUrl: "https://leasedirect.com/lss/account-summary/my-account",
    }

    constructor() {
        super(LeasedirectCollector.CONFIG);
    }
}
