
import { SketchCollector } from '../../sketchCollector';

export class Q8Collector extends SketchCollector {

    static CONFIG = {
        id: "q8",
        name: "Q8",
        description: "i18n.collectors.q8.description",
        version: "0",
        website: "https://www.q8.dk/q8-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21976.jpg",
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
        entryUrl: "https://www.q8.dk/q8-login/",
    }

    constructor() {
        super(Q8Collector.CONFIG);
    }
}
