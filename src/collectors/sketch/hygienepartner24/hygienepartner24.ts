
import { SketchCollector } from '../../sketchCollector';

export class Hygienepartner24Collector extends SketchCollector {

    static CONFIG = {
        id: "hygienepartner24",
        name: "Hygienepartner24",
        description: "i18n.collectors.hygienepartner24.description",
        version: "0",
        website: "https://www.hygienepartner24.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153514.jpg",
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
        entryUrl: "https://www.hygienepartner24.de/account/login",
    }

    constructor() {
        super(Hygienepartner24Collector.CONFIG);
    }
}
