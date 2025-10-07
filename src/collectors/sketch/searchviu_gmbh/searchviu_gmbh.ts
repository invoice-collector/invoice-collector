
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SearchviuGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "searchviu_gmbh",
        name: "searchviu GmbH",
        description: "i18n.collectors.searchviu_gmbh.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xSHpscFdMWmtEczdSVWJmLF9OU25pVzZLZlFQRktMejlhcmdwSG92Rlc0UUJzQ0po01003ESql5Aq",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799097.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xSHpscFdMWmtEczdSVWJmLF9OU25pVzZLZlFQRktMejlhcmdwSG92Rlc0UUJzQ0po01003ESql5Aq",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SearchviuGmbhCollector.CONFIG);
    }
}
