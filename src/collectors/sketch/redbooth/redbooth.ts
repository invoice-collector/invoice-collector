
import { SketchCollector } from '../../sketchCollector';

export class RedboothCollector extends SketchCollector {

    static CONFIG = {
        id: "redbooth",
        name: "Redbooth",
        description: "i18n.collectors.redbooth.description",
        version: "0",
        website: "https://redbooth.com/a/#!/plans/568660/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202495.jpg",
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
        entryUrl: "https://redbooth.com/a/#!/plans/568660/invoices",
    }

    constructor() {
        super(RedboothCollector.CONFIG);
    }
}
