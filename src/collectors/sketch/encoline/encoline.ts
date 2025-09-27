
import { SketchCollector } from '../../sketchCollector';

export class EncolineCollector extends SketchCollector {

    static CONFIG = {
        id: "encoline",
        name: "encoLine",
        description: "i18n.collectors.encoline.description",
        version: "0",
        website: "https://www.encoline.de/www/encoline/kundenlogin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9537.jpg",
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
        entryUrl: "https://www.encoline.de/www/encoline/kundenlogin/",
    }

    constructor() {
        super(EncolineCollector.CONFIG);
    }
}
