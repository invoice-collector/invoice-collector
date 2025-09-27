
import { SketchCollector } from '../../sketchCollector';

export class GsmplazaNlCollector extends SketchCollector {

    static CONFIG = {
        id: "gsmplaza_nl",
        name: "GSMplaza.nl",
        description: "i18n.collectors.gsmplaza_nl.description",
        version: "0",
        website: "http://www.gsmplaza.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9576.jpg",
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
        entryUrl: "http://www.gsmplaza.nl",
    }

    constructor() {
        super(GsmplazaNlCollector.CONFIG);
    }
}
