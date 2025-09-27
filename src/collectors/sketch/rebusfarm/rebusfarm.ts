
import { SketchCollector } from '../../sketchCollector';

export class RebusfarmCollector extends SketchCollector {

    static CONFIG = {
        id: "rebusfarm",
        name: "RebusFarm",
        description: "i18n.collectors.rebusfarm.description",
        version: "0",
        website: "https://de.rebusfarm.net/de/de-alternative-login?view=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41704.jpg",
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
        entryUrl: "https://de.rebusfarm.net/de/de-alternative-login?view=login",
    }

    constructor() {
        super(RebusfarmCollector.CONFIG);
    }
}
