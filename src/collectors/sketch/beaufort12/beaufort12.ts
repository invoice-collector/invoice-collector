
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Beaufort12Collector extends SketchCollector {

    static CONFIG = {
        id: "beaufort12",
        name: "beaufort12",
        description: "i18n.collectors.beaufort12.description",
        version: "0",
        website: "https://alpha-deutschland.lightning.force.com/lightning/n/wbsendit__CM_Settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2712261.jpg",
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
        entryUrl: "https://alpha-deutschland.lightning.force.com/lightning/n/wbsendit__CM_Settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Beaufort12Collector.CONFIG);
    }
}
