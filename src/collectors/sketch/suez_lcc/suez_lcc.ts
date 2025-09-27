
import { SketchCollector } from '../../sketchCollector';

export class SuezLccCollector extends SketchCollector {

    static CONFIG = {
        id: "suez_lcc",
        name: "Suez LCC",
        description: "i18n.collectors.suez_lcc.description",
        version: "0",
        website: "https://lcc.suez.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863973.jpg",
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
        entryUrl: "https://lcc.suez.co.uk/login",
    }

    constructor() {
        super(SuezLccCollector.CONFIG);
    }
}
