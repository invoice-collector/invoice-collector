
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimpleAnalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "simple_analytics",
        name: "Simple Analytics",
        description: "i18n.collectors.simple_analytics.description",
        version: "0",
        website: "https://simpleanalytics.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/786666.jpg",
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
        entryUrl: "https://simpleanalytics.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimpleAnalyticsCollector.CONFIG);
    }
}
