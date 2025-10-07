
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeaddeskCollector extends SketchCollector {

    static CONFIG = {
        id: "leaddesk",
        name: "LeadDesk",
        description: "i18n.collectors.leaddesk.description",
        version: "0",
        website: "https://login.leaddesk.com/r79.6/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14400.jpg",
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
        entryUrl: "https://login.leaddesk.com/r79.6/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeaddeskCollector.CONFIG);
    }
}
