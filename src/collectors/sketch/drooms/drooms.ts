
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DroomsCollector extends SketchCollector {

    static CONFIG = {
        id: "drooms",
        name: "Drooms",
        description: "i18n.collectors.drooms.description",
        version: "0",
        website: "shop.drooms.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1428795.jpg",
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
        entryUrl: "shop.drooms.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DroomsCollector.CONFIG);
    }
}
