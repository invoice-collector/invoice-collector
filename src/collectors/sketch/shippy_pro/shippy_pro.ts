
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShippyProCollector extends SketchCollector {

    static CONFIG = {
        id: "shippy_pro",
        name: "Shippy Pro",
        description: "i18n.collectors.shippy_pro.description",
        version: "0",
        website: "https://compute.fattureincloud.it/doc/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1369929.jpg",
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
        entryUrl: "https://compute.fattureincloud.it/doc/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShippyProCollector.CONFIG);
    }
}
