
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TanatCoffeeKawaProCollector extends SketchCollector {

    static CONFIG = {
        id: "tanat_coffee_kawa_pro",
        name: "Tanat Coffee - Kawa Pro",
        description: "i18n.collectors.tanat_coffee_kawa_pro.description",
        version: "0",
        website: "https://pro.kawa.coffee/mon-compte/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4672939.jpg",
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
        entryUrl: "https://pro.kawa.coffee/mon-compte/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TanatCoffeeKawaProCollector.CONFIG);
    }
}
