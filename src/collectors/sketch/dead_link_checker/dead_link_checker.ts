
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeadLinkCheckerCollector extends SketchCollector {

    static CONFIG = {
        id: "dead_link_checker",
        name: "dead link checker",
        description: "i18n.collectors.dead_link_checker.description",
        version: "0",
        website: "https://www.deadlinkchecker.com/reports.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2201643.jpg",
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
        entryUrl: "https://www.deadlinkchecker.com/reports.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeadLinkCheckerCollector.CONFIG);
    }
}
