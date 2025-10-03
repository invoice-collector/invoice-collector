
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EwetelCollector extends SketchCollector {

    static CONFIG = {
        id: "ewetel",
        name: "Ewetel",
        description: "i18n.collectors.ewetel.description",
        version: "0",
        website: "https://mein.ewe.de/ewetelcss/secure/billingOverview.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374753.jpg",
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
        entryUrl: "https://mein.ewe.de/ewetelcss/secure/billingOverview.xhtml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EwetelCollector.CONFIG);
    }
}
