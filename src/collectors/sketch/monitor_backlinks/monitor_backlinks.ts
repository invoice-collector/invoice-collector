
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonitorBacklinksCollector extends SketchCollector {

    static CONFIG = {
        id: "monitor_backlinks",
        name: "Monitor Backlinks",
        description: "i18n.collectors.monitor_backlinks.description",
        version: "0",
        website: "https://monitorbacklinks.com/app/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241759.jpg",
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
        entryUrl: "https://monitorbacklinks.com/app/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonitorBacklinksCollector.CONFIG);
    }
}
