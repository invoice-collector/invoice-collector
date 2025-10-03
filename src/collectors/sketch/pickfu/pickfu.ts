
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PickfuCollector extends SketchCollector {

    static CONFIG = {
        id: "pickfu",
        name: "Pickfu",
        description: "i18n.collectors.pickfu.description",
        version: "0",
        website: "https://www.pickfu.com/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144295.jpg",
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
        entryUrl: "https://www.pickfu.com/my/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PickfuCollector.CONFIG);
    }
}
