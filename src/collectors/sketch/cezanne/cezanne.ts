
import { SketchCollector } from '../../sketchCollector';

export class CezanneCollector extends SketchCollector {

    static CONFIG = {
        id: "cezanne",
        name: "Cezanne",
        description: "i18n.collectors.cezanne.description",
        version: "0",
        website: "https://w3.cezanneondemand.com/CezanneOnDemand/Account/LogIn?ReturnUrl=~%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/772689.jpg",
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
        entryUrl: "https://w3.cezanneondemand.com/CezanneOnDemand/Account/LogIn?ReturnUrl=~%2F",
    }

    constructor() {
        super(CezanneCollector.CONFIG);
    }
}
