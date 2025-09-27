
import { SketchCollector } from '../../sketchCollector';

export class VyondCollector extends SketchCollector {

    static CONFIG = {
        id: "vyond",
        name: "VYOND",
        description: "i18n.collectors.vyond.description",
        version: "0",
        website: "https://ga.vyond.com/login?r=%2Faccount%2Fbilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87305.jpg",
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
        entryUrl: "https://ga.vyond.com/login?r=%2Faccount%2Fbilling",
    }

    constructor() {
        super(VyondCollector.CONFIG);
    }
}
