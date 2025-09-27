
import { SketchCollector } from '../../sketchCollector';

export class DataforseoCollector extends SketchCollector {

    static CONFIG = {
        id: "dataforseo",
        name: "DataforSEO",
        description: "i18n.collectors.dataforseo.description",
        version: "0",
        website: "https://app.dataforseo.com/users/getrows",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1968090.jpg",
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
        entryUrl: "https://app.dataforseo.com/users/getrows",
    }

    constructor() {
        super(DataforseoCollector.CONFIG);
    }
}
