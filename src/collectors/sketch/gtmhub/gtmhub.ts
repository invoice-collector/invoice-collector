
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GtmhubCollector extends SketchCollector {

    static CONFIG = {
        id: "gtmhub",
        name: "Gtmhub",
        description: "i18n.collectors.gtmhub.description",
        version: "0",
        website: "https://gtmhub.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532741.jpg",
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
        entryUrl: "https://gtmhub.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GtmhubCollector.CONFIG);
    }
}
