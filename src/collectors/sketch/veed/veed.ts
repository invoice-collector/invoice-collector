
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VeedCollector extends SketchCollector {

    static CONFIG = {
        id: "veed",
        name: "VEED",
        description: "i18n.collectors.veed.description",
        version: "0",
        website: "https://www.veed.io/workspaces/d3757d68-f1f3-446f-8783-7b635bd00103/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/504680.jpg",
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
        entryUrl: "https://www.veed.io/workspaces/d3757d68-f1f3-446f-8783-7b635bd00103/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VeedCollector.CONFIG);
    }
}
