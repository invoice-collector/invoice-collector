
import { SketchCollector } from '../../sketchCollector';

export class QontoCollector extends SketchCollector {

    static CONFIG = {
        id: "qonto",
        name: "Qonto",
        description: "i18n.collectors.qonto.description",
        version: "0",
        website: "https://app.qonto.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534513.jpg",
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
        entryUrl: "https://app.qonto.com/",
    }

    constructor() {
        super(QontoCollector.CONFIG);
    }
}
