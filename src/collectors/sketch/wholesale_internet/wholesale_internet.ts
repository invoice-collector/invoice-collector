
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WholesaleInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "wholesale_internet",
        name: "Wholesale Internet",
        description: "i18n.collectors.wholesale_internet.description",
        version: "0",
        website: "https://my.wholesaleinternet.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52185.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://my.wholesaleinternet.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WholesaleInternetCollector.CONFIG);
    }
}
