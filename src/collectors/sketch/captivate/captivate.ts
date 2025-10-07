
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CaptivateCollector extends SketchCollector {

    static CONFIG = {
        id: "captivate",
        name: "captivate",
        description: "i18n.collectors.captivate.description",
        version: "0",
        website: "https://my.captivate.fm/login?returnUrl=%2Fdashboard%2Fstart",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2520242.jpg",
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
        entryUrl: "https://my.captivate.fm/login?returnUrl=%2Fdashboard%2Fstart",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CaptivateCollector.CONFIG);
    }
}
