
import { SketchCollector } from '../../sketchCollector';

export class MsdTiergesundheitCollector extends SketchCollector {

    static CONFIG = {
        id: "msd_tiergesundheit",
        name: "MSD Tiergesundheit",
        description: "i18n.collectors.msd_tiergesundheit.description",
        version: "0",
        website: "https://myaccount.authentication.us10.hana.ondemand.com/saml/login/alias/myaccount.aws-live?disco=true&idp=https%3A%2F%2Fwww.msd-tiergesundheit.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445821.jpg",
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
        entryUrl: "https://myaccount.authentication.us10.hana.ondemand.com/saml/login/alias/myaccount.aws-live?disco=true&idp=https%3A%2F%2Fwww.msd-tiergesundheit.de",
    }

    constructor() {
        super(MsdTiergesundheitCollector.CONFIG);
    }
}
