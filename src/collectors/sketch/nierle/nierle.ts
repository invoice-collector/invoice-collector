
import { SketchCollector } from '../../sketchCollector';

export class NierleCollector extends SketchCollector {

    static CONFIG = {
        id: "nierle",
        name: "Nierle",
        description: "i18n.collectors.nierle.description",
        version: "0",
        website: "http://www.nierle.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122536.jpg",
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
        entryUrl: "http://www.nierle.fr/",
    }

    constructor() {
        super(NierleCollector.CONFIG);
    }
}
