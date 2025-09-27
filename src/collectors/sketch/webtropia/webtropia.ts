
import { SketchCollector } from '../../sketchCollector';

export class WebtropiaCollector extends SketchCollector {

    static CONFIG = {
        id: "webtropia",
        name: "Webtropia",
        description: "i18n.collectors.webtropia.description",
        version: "0",
        website: "https://zkm.webtropia.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/460.jpg",
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
        entryUrl: "https://zkm.webtropia.com/login",
    }

    constructor() {
        super(WebtropiaCollector.CONFIG);
    }
}
