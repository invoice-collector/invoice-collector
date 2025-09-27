
import { SketchCollector } from '../../sketchCollector';

export class BeoCollector extends SketchCollector {

    static CONFIG = {
        id: "beo",
        name: "BEO",
        description: "i18n.collectors.beo.description",
        version: "0",
        website: "http://kunden.expowin.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/551.jpg",
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
        entryUrl: "http://kunden.expowin.de/",
    }

    constructor() {
        super(BeoCollector.CONFIG);
    }
}
