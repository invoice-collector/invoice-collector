
import { SketchCollector } from '../../sketchCollector';

export class GetinternetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "getinternet_de",
        name: "Getinternet.de",
        description: "i18n.collectors.getinternet_de.description",
        version: "0",
        website: "https://kunden.getinternet.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9498.jpg",
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
        entryUrl: "https://kunden.getinternet.de/",
    }

    constructor() {
        super(GetinternetDeCollector.CONFIG);
    }
}
