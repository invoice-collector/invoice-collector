
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Site5Collector extends SketchCollector {

    static CONFIG = {
        id: "site5",
        name: "site5",
        description: "i18n.collectors.site5.description",
        version: "0",
        website: "https://customers.site5.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8632.jpg",
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
        entryUrl: "https://customers.site5.com/clientarea.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Site5Collector.CONFIG);
    }
}
