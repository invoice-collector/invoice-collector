
import { SketchCollector } from '../../sketchCollector';

export class CdiscountComPresseCollector extends SketchCollector {

    static CONFIG = {
        id: "cdiscount_com_presse",
        name: "CDiscount.com Presse",
        description: "i18n.collectors.cdiscount_com_presse.description",
        version: "0",
        website: "https://clients.cdiscount.com/Account/Login.html?_ga=2.153115960.1617114807.1553787937-1533610631.1553187014",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117527.jpg",
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
        entryUrl: "https://clients.cdiscount.com/Account/Login.html?_ga=2.153115960.1617114807.1553787937-1533610631.1553187014",
    }

    constructor() {
        super(CdiscountComPresseCollector.CONFIG);
    }
}
