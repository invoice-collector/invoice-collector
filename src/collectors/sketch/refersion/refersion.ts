
import { SketchCollector } from '../../sketchCollector';

export class RefersionCollector extends SketchCollector {

    static CONFIG = {
        id: "refersion",
        name: "Refersion",
        description: "i18n.collectors.refersion.description",
        version: "0",
        website: "https://hq.refersion.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30811.jpg",
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
        entryUrl: "https://hq.refersion.com/account/billing",
    }

    constructor() {
        super(RefersionCollector.CONFIG);
    }
}
