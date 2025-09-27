
import { SketchCollector } from '../../sketchCollector';

export class EasywerkstattCollector extends SketchCollector {

    static CONFIG = {
        id: "easywerkstatt",
        name: "EasyWerkstatt",
        description: "i18n.collectors.easywerkstatt.description",
        version: "0",
        website: "https://app.easywerkstatt.com/subscription/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349390.jpg",
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
        entryUrl: "https://app.easywerkstatt.com/subscription/invoices",
    }

    constructor() {
        super(EasywerkstattCollector.CONFIG);
    }
}
