
import { SketchCollector } from '../../sketchCollector';

export class HttpNetCollector extends SketchCollector {

    static CONFIG = {
        id: "http_net",
        name: "http.net",
        description: "i18n.collectors.http_net.description",
        version: "0",
        website: "https://partner.http.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63881.jpg",
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
        entryUrl: "https://partner.http.net/login",
    }

    constructor() {
        super(HttpNetCollector.CONFIG);
    }
}
