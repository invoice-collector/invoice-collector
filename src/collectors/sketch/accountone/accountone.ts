
import { SketchCollector } from '../../sketchCollector';

export class AccountoneCollector extends SketchCollector {

    static CONFIG = {
        id: "accountone",
        name: "ACCOUNTONE",
        description: "i18n.collectors.accountone.description",
        version: "0",
        website: "https://service.accountone.de/myaccountone/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/813727.jpg",
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
        entryUrl: "https://service.accountone.de/myaccountone/",
    }

    constructor() {
        super(AccountoneCollector.CONFIG);
    }
}
