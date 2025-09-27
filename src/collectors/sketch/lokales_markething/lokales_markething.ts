
import { SketchCollector } from '../../sketchCollector';

export class LokalesMarkethingCollector extends SketchCollector {

    static CONFIG = {
        id: "lokales_markething",
        name: "Lokales Markething",
        description: "i18n.collectors.lokales_markething.description",
        version: "0",
        website: "https://ergo.ergo-mein-lokales-marketing.de/marcapo_platform//OrderStart.cms",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240043.jpg",
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
        entryUrl: "https://ergo.ergo-mein-lokales-marketing.de/marcapo_platform//OrderStart.cms",
    }

    constructor() {
        super(LokalesMarkethingCollector.CONFIG);
    }
}
