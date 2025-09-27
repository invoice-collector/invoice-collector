
import { SketchCollector } from '../../sketchCollector';

export class DeutscheBahnCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_bahn",
        name: "Deutsche Bahn",
        description: "i18n.collectors.deutsche_bahn.description",
        version: "0",
        website: "https://www.bahn.de/p/view/meinebahn/login.shtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8253.jpg",
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
        entryUrl: "https://www.bahn.de/p/view/meinebahn/login.shtml",
    }

    constructor() {
        super(DeutscheBahnCollector.CONFIG);
    }
}
