
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZeroheightCollector extends SketchCollector {

    static CONFIG = {
        id: "zeroheight",
        name: "zeroheight",
        description: "i18n.collectors.zeroheight.description",
        version: "0",
        website: "https://purpleplanet.zeroheight.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203040.jpg",
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
        entryUrl: "https://purpleplanet.zeroheight.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZeroheightCollector.CONFIG);
    }
}
