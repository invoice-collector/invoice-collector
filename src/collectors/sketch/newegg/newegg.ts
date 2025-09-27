
import { SketchCollector } from '../../sketchCollector';

export class NeweggCollector extends SketchCollector {

    static CONFIG = {
        id: "newegg",
        name: "Newegg",
        description: "i18n.collectors.newegg.description",
        version: "0",
        website: "https://secure.newegg.com/NewMyAccount/AccountLogin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9038.jpg",
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
        entryUrl: "https://secure.newegg.com/NewMyAccount/AccountLogin.aspx",
    }

    constructor() {
        super(NeweggCollector.CONFIG);
    }
}
