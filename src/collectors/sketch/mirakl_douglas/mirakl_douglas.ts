
import { SketchCollector } from '../../sketchCollector';

export class MiraklDouglasCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_douglas",
        name: "Mirakl Douglas",
        description: "i18n.collectors.mirakl_douglas.description",
        version: "0",
        website: "https://douglas-prod.mirakl.net/sellerpayment/shop/accounting-document/list/to-sellers?limit=25&sort=issueDate%2CDESC",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973281.jpg",
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
        entryUrl: "https://douglas-prod.mirakl.net/sellerpayment/shop/accounting-document/list/to-sellers?limit=25&sort=issueDate%2CDESC",
    }

    constructor() {
        super(MiraklDouglasCollector.CONFIG);
    }
}
