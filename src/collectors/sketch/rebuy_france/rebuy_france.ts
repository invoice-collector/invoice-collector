
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RebuyFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "rebuy_france",
        name: "reBuy France",
        description: "i18n.collectors.rebuy_france.description",
        version: "0",
        website: "https://www.rebuy.fr/my/orders/blue",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860988.jpg",
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
        entryUrl: "https://www.rebuy.fr/my/orders/blue",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RebuyFranceCollector.CONFIG);
    }
}
