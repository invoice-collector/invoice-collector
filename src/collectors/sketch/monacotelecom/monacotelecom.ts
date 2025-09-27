
import { SketchCollector } from '../../sketchCollector';

export class MonacotelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "monacotelecom",
        name: "monacotelecom",
        description: "i18n.collectors.monacotelecom.description",
        version: "0",
        website: "https://espace-client.monaco-telecom.mc/bill/downloadPdfBil/1454817/202108",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927930.jpg",
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
        entryUrl: "https://espace-client.monaco-telecom.mc/bill/downloadPdfBil/1454817/202108",
    }

    constructor() {
        super(MonacotelecomCollector.CONFIG);
    }
}
