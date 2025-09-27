
import { SketchCollector } from '../../sketchCollector';

export class PromeaiCollector extends SketchCollector {

    static CONFIG = {
        id: "promeai",
        name: "PromeAI",
        description: "i18n.collectors.promeai.description",
        version: "0",
        website: "https://www.promeai.pro/userPayment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006161.jpg",
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
        entryUrl: "https://www.promeai.pro/userPayment",
    }

    constructor() {
        super(PromeaiCollector.CONFIG);
    }
}
