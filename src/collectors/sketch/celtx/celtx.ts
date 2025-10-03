
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CeltxCollector extends SketchCollector {

    static CONFIG = {
        id: "celtx",
        name: "Celtx",
        description: "i18n.collectors.celtx.description",
        version: "0",
        website: "https://www.celtx.com/a/ux/purchasehistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49396.jpg",
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
        entryUrl: "https://www.celtx.com/a/ux/purchasehistory",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CeltxCollector.CONFIG);
    }
}
