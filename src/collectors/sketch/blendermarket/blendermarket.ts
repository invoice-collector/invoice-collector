
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BlendermarketCollector extends SketchCollector {

    static CONFIG = {
        id: "blendermarket",
        name: "blendermarket",
        description: "i18n.collectors.blendermarket.description",
        version: "0",
        website: "https://blendermarket.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347412.jpg",
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
        entryUrl: "https://blendermarket.com/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlendermarketCollector.CONFIG);
    }
}
