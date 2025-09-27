
import { SketchCollector } from '../../sketchCollector';

export class ElephantsqlCollector extends SketchCollector {

    static CONFIG = {
        id: "elephantsql",
        name: "ElephantSQL",
        description: "i18n.collectors.elephantsql.description",
        version: "0",
        website: "https://customer.elephantsql.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517014.jpg",
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
        entryUrl: "https://customer.elephantsql.com/billing",
    }

    constructor() {
        super(ElephantsqlCollector.CONFIG);
    }
}
