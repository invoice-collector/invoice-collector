
import { SketchCollector } from '../../sketchCollector';

export class DriftCollector extends SketchCollector {

    static CONFIG = {
        id: "drift",
        name: "Drift",
        description: "i18n.collectors.drift.description",
        version: "0",
        website: "https://app.drift.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36414.jpg",
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
        entryUrl: "https://app.drift.com/settings/billing",
    }

    constructor() {
        super(DriftCollector.CONFIG);
    }
}
