
import { SketchCollector } from '../../sketchCollector';

export class TopazLabsCollector extends SketchCollector {

    static CONFIG = {
        id: "topaz_labs",
        name: "Topaz Labs",
        description: "i18n.collectors.topaz_labs.description",
        version: "0",
        website: "https://topazlabs.com/my-account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202966.jpg",
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
        entryUrl: "https://topazlabs.com/my-account/orders",
    }

    constructor() {
        super(TopazLabsCollector.CONFIG);
    }
}
