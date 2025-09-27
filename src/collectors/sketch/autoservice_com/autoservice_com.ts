
import { SketchCollector } from '../../sketchCollector';

export class AutoserviceComCollector extends SketchCollector {

    static CONFIG = {
        id: "autoservice_com",
        name: "Autoservice.com",
        description: "i18n.collectors.autoservice_com.description",
        version: "0",
        website: "https://www.autoservice.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40276.jpg",
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
        entryUrl: "https://www.autoservice.com/",
    }

    constructor() {
        super(AutoserviceComCollector.CONFIG);
    }
}
