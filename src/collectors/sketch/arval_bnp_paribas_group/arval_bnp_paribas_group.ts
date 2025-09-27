
import { SketchCollector } from '../../sketchCollector';

export class ArvalBnpParibasGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "arval_bnp_paribas_group",
        name: "Arval BNP Paribas Group",
        description: "i18n.collectors.arval_bnp_paribas_group.description",
        version: "0",
        website: "https://www.myarval.com/ArvalSmartExperience/ArvalDocuments.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020633.jpg",
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
        entryUrl: "https://www.myarval.com/ArvalSmartExperience/ArvalDocuments.aspx",
    }

    constructor() {
        super(ArvalBnpParibasGroupCollector.CONFIG);
    }
}
