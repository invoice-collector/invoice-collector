
import { SketchCollector } from '../../sketchCollector';

export class WebsequencediagramsCollector extends SketchCollector {

    static CONFIG = {
        id: "websequencediagrams",
        name: "WebSequenceDiagrams",
        description: "i18n.collectors.websequencediagrams.description",
        version: "0",
        website: "http://www.websequencediagrams.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9614.jpg",
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
        entryUrl: "http://www.websequencediagrams.com",
    }

    constructor() {
        super(WebsequencediagramsCollector.CONFIG);
    }
}
