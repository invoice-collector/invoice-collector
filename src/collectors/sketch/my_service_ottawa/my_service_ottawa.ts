
import { SketchCollector } from '../../sketchCollector';

export class MyServiceOttawaCollector extends SketchCollector {

    static CONFIG = {
        id: "my_service_ottawa",
        name: "My Service Ottawa",
        description: "i18n.collectors.my_service_ottawa.description",
        version: "0",
        website: "https://myservice.ottawa.ca/profile/account/login?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23368.jpg",
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
        entryUrl: "https://myservice.ottawa.ca/profile/account/login?lang=en",
    }

    constructor() {
        super(MyServiceOttawaCollector.CONFIG);
    }
}
