
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BlockpitCollector extends SketchCollector {

    static CONFIG = {
        id: "blockpit",
        name: "Blockpit",
        description: "i18n.collectors.blockpit.description",
        version: "0",
        website: "https://app.blockpit.io/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445727.jpg",
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
        entryUrl: "https://app.blockpit.io/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlockpitCollector.CONFIG);
    }
}
