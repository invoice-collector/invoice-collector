
import { SketchCollector } from '../../sketchCollector';

export class WoopraCollector extends SketchCollector {

    static CONFIG = {
        id: "woopra",
        name: "Woopra",
        description: "i18n.collectors.woopra.description",
        version: "0",
        website: "http://www.woopra.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10097.jpg",
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
        entryUrl: "http://www.woopra.com",
    }

    constructor() {
        super(WoopraCollector.CONFIG);
    }
}
