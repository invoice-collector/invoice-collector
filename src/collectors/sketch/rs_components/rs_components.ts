
import { SketchCollector } from '../../sketchCollector';

export class RsComponentsCollector extends SketchCollector {

    static CONFIG = {
        id: "rs_components",
        name: "RS Components",
        description: "i18n.collectors.rs_components.description",
        version: "0",
        website: "https://www.rs-online.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122797.jpg",
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
        entryUrl: "https://www.rs-online.com/",
    }

    constructor() {
        super(RsComponentsCollector.CONFIG);
    }
}
