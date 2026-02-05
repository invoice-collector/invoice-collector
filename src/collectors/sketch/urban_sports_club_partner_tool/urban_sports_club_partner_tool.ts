
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UrbanSportsClubPartnerToolCollector extends SketchCollector {

    static CONFIG = {
        id: "urban_sports_club_partner_tool",
        name: "Urban Sports Club - Partner Tool",
        description: "i18n.collectors.urban_sports_club_partner_tool.description",
        version: "0",
        website: "https://partner.urbansportsclub.com/payout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96006.jpg",
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
        loginUrl: "https://partner.urbansportsclub.com/payout",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UrbanSportsClubPartnerToolCollector.CONFIG);
    }
}
