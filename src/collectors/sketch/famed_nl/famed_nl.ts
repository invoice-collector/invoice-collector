
import { SketchCollector } from '../../sketchCollector';

export class FamedNlCollector extends SketchCollector {

    static CONFIG = {
        id: "famed_nl",
        name: "Famed.nl",
        description: "i18n.collectors.famed_nl.description",
        version: "0",
        website: "http://www.famed.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32329.jpg",
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
        entryUrl: "http://www.famed.nl",
    }

    constructor() {
        super(FamedNlCollector.CONFIG);
    }
}
