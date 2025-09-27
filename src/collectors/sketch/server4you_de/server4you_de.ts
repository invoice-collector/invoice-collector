
import { SketchCollector } from '../../sketchCollector';

export class Server4youDeCollector extends SketchCollector {

    static CONFIG = {
        id: "server4you_de",
        name: "SERVER4YOU.de",
        description: "i18n.collectors.server4you_de.description",
        version: "0",
        website: "https://my.server4you.de/de/Generic/Auth/Index/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/315.jpg",
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
        entryUrl: "https://my.server4you.de/de/Generic/Auth/Index/login",
    }

    constructor() {
        super(Server4youDeCollector.CONFIG);
    }
}
