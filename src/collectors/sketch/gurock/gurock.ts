
import { SketchCollector } from '../../sketchCollector';

export class GurockCollector extends SketchCollector {

    static CONFIG = {
        id: "gurock",
        name: "gurock",
        description: "i18n.collectors.gurock.description",
        version: "0",
        website: "https://secure.gurock.com/customers/auth/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39673.jpg",
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
        entryUrl: "https://secure.gurock.com/customers/auth/login/",
    }

    constructor() {
        super(GurockCollector.CONFIG);
    }
}
