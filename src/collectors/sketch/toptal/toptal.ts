
import { SketchCollector } from '../../sketchCollector';

export class ToptalCollector extends SketchCollector {

    static CONFIG = {
        id: "toptal",
        name: "Toptal",
        description: "i18n.collectors.toptal.description",
        version: "0",
        website: "https://portal.toptal.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119980.jpg",
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
        entryUrl: "https://portal.toptal.com/billing",
    }

    constructor() {
        super(ToptalCollector.CONFIG);
    }
}
