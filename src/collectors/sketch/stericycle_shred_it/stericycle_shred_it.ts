
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StericycleShredItCollector extends SketchCollector {

    static CONFIG = {
        id: "stericycle_shred_it",
        name: "Stericycle / Shred-it",
        description: "i18n.collectors.stericycle_shred_it.description",
        version: "0",
        website: "https://www.mystericycle.com/Portal_App/BillingSummary.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2715092.jpg",
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
        entryUrl: "https://www.mystericycle.com/Portal_App/BillingSummary.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StericycleShredItCollector.CONFIG);
    }
}
