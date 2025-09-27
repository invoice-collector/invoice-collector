
import { SketchCollector } from '../../sketchCollector';

export class MaxdomeCollector extends SketchCollector {

    static CONFIG = {
        id: "maxdome",
        name: "maxdome",
        description: "i18n.collectors.maxdome.description",
        version: "0",
        website: "https://www.maxdome.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14295.jpg",
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
        entryUrl: "https://www.maxdome.de/",
    }

    constructor() {
        super(MaxdomeCollector.CONFIG);
    }
}
