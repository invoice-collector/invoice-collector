
import { SketchCollector } from '../../sketchCollector';

export class ReplacedirectNlCollector extends SketchCollector {

    static CONFIG = {
        id: "replacedirect_nl",
        name: "ReplaceDirect.nl",
        description: "i18n.collectors.replacedirect_nl.description",
        version: "0",
        website: "https://www.replacedirect.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32701.jpg",
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
        entryUrl: "https://www.replacedirect.nl/",
    }

    constructor() {
        super(ReplacedirectNlCollector.CONFIG);
    }
}
