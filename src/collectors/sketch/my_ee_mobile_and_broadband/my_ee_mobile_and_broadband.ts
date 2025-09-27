
import { SketchCollector } from '../../sketchCollector';

export class MyEeMobileAndBroadbandCollector extends SketchCollector {

    static CONFIG = {
        id: "my_ee_mobile_and_broadband",
        name: "My EE - mobile and broadband",
        description: "i18n.collectors.my_ee_mobile_and_broadband.description",
        version: "0",
        website: "https://myaccount.ee.co.uk/app/top-up-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76314.jpg",
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
        entryUrl: "https://myaccount.ee.co.uk/app/top-up-history",
    }

    constructor() {
        super(MyEeMobileAndBroadbandCollector.CONFIG);
    }
}
