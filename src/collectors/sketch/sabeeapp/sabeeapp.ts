
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SabeeappCollector extends SketchCollector {

    static CONFIG = {
        id: "sabeeapp",
        name: "SabeeApp",
        description: "i18n.collectors.sabeeapp.description",
        version: "0",
        website: "https://chm.sabeeapp.com/subscription/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223724.jpg",
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
        entryUrl: "https://chm.sabeeapp.com/subscription/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SabeeappCollector.CONFIG);
    }
}
