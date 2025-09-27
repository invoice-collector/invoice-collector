
import { SketchCollector } from '../../sketchCollector';

export class BellEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "bell_enterprise",
        name: "Bell - Enterprise",
        description: "i18n.collectors.bell_enterprise.description",
        version: "0",
        website: "https://www.bell.ca/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210992.jpg",
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
        entryUrl: "https://www.bell.ca/",
    }

    constructor() {
        super(BellEnterpriseCollector.CONFIG);
    }
}
