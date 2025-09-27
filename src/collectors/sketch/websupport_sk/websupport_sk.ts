
import { SketchCollector } from '../../sketchCollector';

export class WebsupportSkCollector extends SketchCollector {

    static CONFIG = {
        id: "websupport_sk",
        name: "Websupport.sk",
        description: "i18n.collectors.websupport_sk.description",
        version: "0",
        website: "https://login.websupport.sk/?s=cart&l=sk&c=websupport.sk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2771551.jpg",
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
        entryUrl: "https://login.websupport.sk/?s=cart&l=sk&c=websupport.sk",
    }

    constructor() {
        super(WebsupportSkCollector.CONFIG);
    }
}
