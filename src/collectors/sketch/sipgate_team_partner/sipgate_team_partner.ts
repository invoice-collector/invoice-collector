
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SipgateTeamPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "sipgate_team_partner",
        name: "Sipgate Team Partner",
        description: "i18n.collectors.sipgate_team_partner.description",
        version: "0",
        website: "https://app.sipgate.com/w0/team/settings/affiliate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778995.jpg",
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
        entryUrl: "https://app.sipgate.com/w0/team/settings/affiliate",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SipgateTeamPartnerCollector.CONFIG);
    }
}
