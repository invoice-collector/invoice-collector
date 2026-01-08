
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleSalesConsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "google_sales_console",
        name: "Google Sales Console",
        description: "i18n.collectors.google_sales_console.description",
        version: "0",
        website: "https://channelservices.cloud.google.com/billing/accounts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729765.jpg",
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
        loginUrl: "https://channelservices.cloud.google.com/billing/accounts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleSalesConsoleCollector.CONFIG);
    }
}
