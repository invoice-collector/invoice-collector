
import { SketchCollector } from '../../sketchCollector';

export class GelsenNetCollector extends SketchCollector {

    static CONFIG = {
        id: "gelsen_net",
        name: "GELSEN-NET",
        description: "i18n.collectors.gelsen_net.description",
        version: "0",
        website: "http://www.gelsen-net.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9417.jpg",
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
        entryUrl: "http://www.gelsen-net.de",
    }

    constructor() {
        super(GelsenNetCollector.CONFIG);
    }
}
