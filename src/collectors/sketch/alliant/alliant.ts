
import { SketchCollector } from '../../sketchCollector';

export class AlliantCollector extends SketchCollector {

    static CONFIG = {
        id: "alliant",
        name: "ALLIANT",
        description: "i18n.collectors.alliant.description",
        version: "0",
        website: "https://www.alliantcreditunion.com/onlinebanking/Accounts/Statements/Estatement.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432660.jpg",
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
        entryUrl: "https://www.alliantcreditunion.com/onlinebanking/Accounts/Statements/Estatement.aspx",
    }

    constructor() {
        super(AlliantCollector.CONFIG);
    }
}
