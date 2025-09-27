
import { SketchCollector } from '../../sketchCollector';

export class RankingcoachCollector extends SketchCollector {

    static CONFIG = {
        id: "rankingcoach",
        name: "rankingCoach",
        description: "i18n.collectors.rankingcoach.description",
        version: "0",
        website: "https://www.rankingcoach.com/de-de#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7620.jpg",
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
        entryUrl: "https://www.rankingcoach.com/de-de#login",
    }

    constructor() {
        super(RankingcoachCollector.CONFIG);
    }
}
