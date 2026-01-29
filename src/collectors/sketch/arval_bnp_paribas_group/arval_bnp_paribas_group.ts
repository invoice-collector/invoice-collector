
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ArvalBnpParibasGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "arval_bnp_paribas_group",
        name: "Arval BNP Paribas Group",
        description: "i18n.collectors.arval_bnp_paribas_group.description",
        version: "0",
        website: "https://www.myarval.com/ArvalSmartExperience/ArvalDocuments.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020633.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://www.myarval.com/ArvalSmartExperience/ArvalDocuments.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ArvalBnpParibasGroupCollector.CONFIG);
    }
}
