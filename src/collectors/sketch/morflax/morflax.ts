
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MorflaxCollector extends SketchCollector {

    static CONFIG = {
        id: "morflax",
        name: "Morflax",
        description: "i18n.collectors.morflax.description",
        version: "0",
        website: "https://studio.morflax.com/dashboard/user/billing/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1412719.jpg",
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
        entryUrl: "https://studio.morflax.com/dashboard/user/billing/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MorflaxCollector.CONFIG);
    }
}
