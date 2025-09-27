
import { SketchCollector } from '../../sketchCollector';

export class AdlanticCollector extends SketchCollector {

    static CONFIG = {
        id: "adlantic",
        name: "Adlantic",
        description: "i18n.collectors.adlantic.description",
        version: "0",
        website: "http://www.adlantic.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32377.jpg",
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
        entryUrl: "http://www.adlantic.nl",
    }

    constructor() {
        super(AdlanticCollector.CONFIG);
    }
}
