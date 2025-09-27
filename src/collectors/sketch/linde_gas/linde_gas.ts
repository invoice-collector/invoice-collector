
import { SketchCollector } from '../../sketchCollector';

export class LindeGasCollector extends SketchCollector {

    static CONFIG = {
        id: "linde_gas",
        name: "Linde Gas",
        description: "i18n.collectors.linde_gas.description",
        version: "0",
        website: "https://www.linde-gas.de/shop/NonAjaxAccountProfileFormView?currentSelection=checkoutProfileSlct&fromLink=myAccount&profileFormStyle=strong&catalogId=3074457345616681318&myAcctMain=2&langId=-3&storeId=715845184",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132109.jpg",
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
        entryUrl: "https://www.linde-gas.de/shop/NonAjaxAccountProfileFormView?currentSelection=checkoutProfileSlct&fromLink=myAccount&profileFormStyle=strong&catalogId=3074457345616681318&myAcctMain=2&langId=-3&storeId=715845184",
    }

    constructor() {
        super(LindeGasCollector.CONFIG);
    }
}
