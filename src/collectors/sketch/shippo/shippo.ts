
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShippoCollector extends SketchCollector {

    static CONFIG = {
        id: "shippo",
        name: "shippo",
        description: "i18n.collectors.shippo.description",
        version: "0",
        website: "https://app.goshippo.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57041.jpg",
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
        entryUrl: "https://app.goshippo.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShippoCollector.CONFIG);
    }
}
