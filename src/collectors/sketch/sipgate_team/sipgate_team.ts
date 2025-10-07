
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SipgateTeamCollector extends SketchCollector {

    static CONFIG = {
        id: "sipgate_team",
        name: "sipgate team",
        description: "i18n.collectors.sipgate_team.description",
        version: "0",
        website: "https://login.sipgate.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/311.jpg",
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
        entryUrl: "https://login.sipgate.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SipgateTeamCollector.CONFIG);
    }
}
