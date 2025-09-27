
import { SketchCollector } from '../../sketchCollector';

export class JpmchalePestControlCollector extends SketchCollector {

    static CONFIG = {
        id: "jpmchale_pest_control",
        name: "JPMcHale Pest Control",
        description: "i18n.collectors.jpmchale_pest_control.description",
        version: "0",
        website: "https://jpmchale.pestconnect.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409828.jpg",
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
        entryUrl: "https://jpmchale.pestconnect.com/login",
    }

    constructor() {
        super(JpmchalePestControlCollector.CONFIG);
    }
}
