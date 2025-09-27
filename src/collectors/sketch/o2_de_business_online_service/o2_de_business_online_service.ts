
import { SketchCollector } from '../../sketchCollector';

export class O2DeBusinessOnlineServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "o2_de_business_online_service",
        name: "o2.de - Business Online Service",
        description: "i18n.collectors.o2_de_business_online_service.description",
        version: "0",
        website: "https://easyaccess.o2business.de/s/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11583.jpg",
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
        entryUrl: "https://easyaccess.o2business.de/s/",
    }

    constructor() {
        super(O2DeBusinessOnlineServiceCollector.CONFIG);
    }
}
