
import { SketchCollector } from '../../sketchCollector';

export class OptisellerComCollector extends SketchCollector {

    static CONFIG = {
        id: "optiseller_com",
        name: "optiseller.com",
        description: "i18n.collectors.optiseller_com.description",
        version: "0",
        website: "https://app.optiseller.com/Admin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649684.jpg",
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
        entryUrl: "https://app.optiseller.com/Admin",
    }

    constructor() {
        super(OptisellerComCollector.CONFIG);
    }
}
