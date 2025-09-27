
import { SketchCollector } from '../../sketchCollector';

export class AvinodeCollector extends SketchCollector {

    static CONFIG = {
        id: "avinode",
        name: "Avinode",
        description: "i18n.collectors.avinode.description",
        version: "0",
        website: "https://marketplace.avinode.com/industry/mvc/billing/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/664230.jpg",
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
        entryUrl: "https://marketplace.avinode.com/industry/mvc/billing/list",
    }

    constructor() {
        super(AvinodeCollector.CONFIG);
    }
}
