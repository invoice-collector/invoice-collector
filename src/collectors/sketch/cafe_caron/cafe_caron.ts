
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CafeCaronCollector extends SketchCollector {

    static CONFIG = {
        id: "cafe_caron",
        name: "Cafe Caron",
        description: "i18n.collectors.cafe_caron.description",
        version: "0",
        website: "https://pro.cafecaron.com/fr/historique-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918700.jpg",
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
        entryUrl: "https://pro.cafecaron.com/fr/historique-commandes",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CafeCaronCollector.CONFIG);
    }
}
