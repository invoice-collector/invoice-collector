
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UptimeComCollector extends SketchCollector {

    static CONFIG = {
        id: "uptime_com",
        name: "Uptime.com",
        description: "i18n.collectors.uptime_com.description",
        version: "0",
        website: "https://uptime.com/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694549.jpg",
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
        entryUrl: "https://uptime.com/billing/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UptimeComCollector.CONFIG);
    }
}
