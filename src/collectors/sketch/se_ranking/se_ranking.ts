
import { SketchCollector } from '../../sketchCollector';

export class SeRankingCollector extends SketchCollector {

    static CONFIG = {
        id: "se_ranking",
        name: "SE Ranking",
        description: "i18n.collectors.se_ranking.description",
        version: "0",
        website: "https://online.seranking.com/admin.subscription.html#/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1268962.jpg",
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
        entryUrl: "https://online.seranking.com/admin.subscription.html#/payments/",
    }

    constructor() {
        super(SeRankingCollector.CONFIG);
    }
}
