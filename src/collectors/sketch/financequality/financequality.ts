
import { SketchCollector } from '../../sketchCollector';

export class FinancequalityCollector extends SketchCollector {

    static CONFIG = {
        id: "financequality",
        name: "FinanceQuality",
        description: "i18n.collectors.financequality.description",
        version: "0",
        website: "https://www.financequality.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58324.jpg",
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
        entryUrl: "https://www.financequality.net/",
    }

    constructor() {
        super(FinancequalityCollector.CONFIG);
    }
}
