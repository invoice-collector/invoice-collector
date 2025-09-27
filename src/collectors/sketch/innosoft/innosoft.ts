
import { SketchCollector } from '../../sketchCollector';

export class InnosoftCollector extends SketchCollector {

    static CONFIG = {
        id: "innosoft",
        name: "Innosoft",
        description: "i18n.collectors.innosoft.description",
        version: "0",
        website: "https://my.innosoft.at/bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7939.jpg",
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
        entryUrl: "https://my.innosoft.at/bill",
    }

    constructor() {
        super(InnosoftCollector.CONFIG);
    }
}
