
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlusnetFruherQscCollector extends SketchCollector {

    static CONFIG = {
        id: "plusnet_fruher_qsc",
        name: "Plusnet (fruher: QSC)",
        description: "i18n.collectors.plusnet_fruher_qsc.description",
        version: "0",
        website: "https://one.plusnet.de/billing/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150638.jpg",
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
        entryUrl: "https://one.plusnet.de/billing/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlusnetFruherQscCollector.CONFIG);
    }
}
