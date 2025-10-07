
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HypetrainCollector extends SketchCollector {

    static CONFIG = {
        id: "hypetrain",
        name: "hypetrain",
        description: "i18n.collectors.hypetrain.description",
        version: "0",
        website: "https://thesissbliss.hypetrain.io/workspace-settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419779.jpg",
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
        entryUrl: "https://thesissbliss.hypetrain.io/workspace-settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HypetrainCollector.CONFIG);
    }
}
