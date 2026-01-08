
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RankingcoachCollector extends SketchCollector {

    static CONFIG = {
        id: "rankingcoach",
        name: "rankingCoach",
        description: "i18n.collectors.rankingcoach.description",
        version: "0",
        website: "https://www.rankingcoach.com/de-de#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7620.jpg",
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
        loginUrl: "https://www.rankingcoach.com/de-de#login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RankingcoachCollector.CONFIG);
    }
}
