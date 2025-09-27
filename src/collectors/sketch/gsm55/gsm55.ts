
import { SketchCollector } from '../../sketchCollector';

export class Gsm55Collector extends SketchCollector {

    static CONFIG = {
        id: "gsm55",
        name: "GSM55",
        description: "i18n.collectors.gsm55.description",
        version: "0",
        website: "https://www.gsm55.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118614.jpg",
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
        entryUrl: "https://www.gsm55.com/",
    }

    constructor() {
        super(Gsm55Collector.CONFIG);
    }
}
