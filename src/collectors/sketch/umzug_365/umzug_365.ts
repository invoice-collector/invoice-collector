
import { SketchCollector } from '../../sketchCollector';

export class Umzug365Collector extends SketchCollector {

    static CONFIG = {
        id: "umzug_365",
        name: "Umzug-365",
        description: "i18n.collectors.umzug_365.description",
        version: "0",
        website: "https://www.umzug-365.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197738.jpg",
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
        entryUrl: "https://www.umzug-365.de/account/login",
    }

    constructor() {
        super(Umzug365Collector.CONFIG);
    }
}
