
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RainbowEdgeviewCollector extends SketchCollector {

    static CONFIG = {
        id: "rainbow_edgeview",
        name: "Rainbow - EdgeView",
        description: "i18n.collectors.rainbow_edgeview.description",
        version: "0",
        website: "https://rainbow-portal.accor.com/EdgeView/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554174.jpg",
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
        entryUrl: "https://rainbow-portal.accor.com/EdgeView/Default.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RainbowEdgeviewCollector.CONFIG);
    }
}
