
import { SketchCollector } from '../../sketchCollector';

export class GummysearchCollector extends SketchCollector {

    static CONFIG = {
        id: "gummysearch",
        name: "GummySearch",
        description: "i18n.collectors.gummysearch.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862987.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/",
    }

    constructor() {
        super(GummysearchCollector.CONFIG);
    }
}
