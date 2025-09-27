
import { SketchCollector } from '../../sketchCollector';

export class HenriotCollector extends SketchCollector {

    static CONFIG = {
        id: "henriot",
        name: "Henriot",
        description: "i18n.collectors.henriot.description",
        version: "0",
        website: "https://extranet.henriot.fr/WEB_GESDOUANE/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356018.jpg",
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
        entryUrl: "https://extranet.henriot.fr/WEB_GESDOUANE/",
    }

    constructor() {
        super(HenriotCollector.CONFIG);
    }
}
