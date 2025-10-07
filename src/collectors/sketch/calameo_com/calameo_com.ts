
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CalameoComCollector extends SketchCollector {

    static CONFIG = {
        id: "calameo_com",
        name: "calameo.com",
        description: "i18n.collectors.calameo_com.description",
        version: "0",
        website: "https://de.calameo.com/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201080.jpg",
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
        entryUrl: "https://de.calameo.com/account/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CalameoComCollector.CONFIG);
    }
}
