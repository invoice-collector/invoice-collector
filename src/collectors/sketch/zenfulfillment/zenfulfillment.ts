
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZenfulfillmentCollector extends SketchCollector {

    static CONFIG = {
        id: "zenfulfillment",
        name: "Zenfulfillment",
        description: "i18n.collectors.zenfulfillment.description",
        version: "0",
        website: "https://app.zenfulfillment.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69828.jpg",
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
        entryUrl: "https://app.zenfulfillment.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZenfulfillmentCollector.CONFIG);
    }
}
