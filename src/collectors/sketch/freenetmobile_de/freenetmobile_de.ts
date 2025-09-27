
import { SketchCollector } from '../../sketchCollector';

export class FreenetmobileDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freenetmobile_de",
        name: "Freenetmobile.de",
        description: "i18n.collectors.freenetmobile_de.description",
        version: "0",
        website: "http://www.freenetmobile.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9330.jpg",
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
        entryUrl: "http://www.freenetmobile.de",
    }

    constructor() {
        super(FreenetmobileDeCollector.CONFIG);
    }
}
