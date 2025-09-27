
import { SketchCollector } from '../../sketchCollector';

export class TalentbaitCollector extends SketchCollector {

    static CONFIG = {
        id: "talentbait",
        name: "Talentbait",
        description: "i18n.collectors.talentbait.description",
        version: "0",
        website: "https://app.talentbait.de/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098211.jpg",
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
        entryUrl: "https://app.talentbait.de/billing",
    }

    constructor() {
        super(TalentbaitCollector.CONFIG);
    }
}
