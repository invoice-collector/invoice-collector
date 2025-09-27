
import { SketchCollector } from '../../sketchCollector';

export class LebaraNlCollector extends SketchCollector {

    static CONFIG = {
        id: "lebara_nl",
        name: "Lebara.nl",
        description: "i18n.collectors.lebara_nl.description",
        version: "0",
        website: "https://www.lebara.nl/nl/mylebara.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985625.jpg",
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
        entryUrl: "https://www.lebara.nl/nl/mylebara.html",
    }

    constructor() {
        super(LebaraNlCollector.CONFIG);
    }
}
