
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class XavierAnalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "xavier_analytics",
        name: "Xavier Analytics",
        description: "i18n.collectors.xavier_analytics.description",
        version: "0",
        website: "https://xavier-analytics.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385902.jpg",
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
        entryUrl: "https://xavier-analytics.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XavierAnalyticsCollector.CONFIG);
    }
}
