
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaptilerCollector extends SketchCollector {

    static CONFIG = {
        id: "maptiler",
        name: "Maptiler",
        description: "i18n.collectors.maptiler.description",
        version: "0",
        website: "https://cloud.maptiler.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138770.jpg",
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
        entryUrl: "https://cloud.maptiler.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaptilerCollector.CONFIG);
    }
}
