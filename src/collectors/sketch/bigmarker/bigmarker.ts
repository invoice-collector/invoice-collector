
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BigmarkerCollector extends SketchCollector {

    static CONFIG = {
        id: "bigmarker",
        name: "BigMarker",
        description: "i18n.collectors.bigmarker.description",
        version: "0",
        website: "https://www.bigmarker.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230822.jpg",
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
        entryUrl: "https://www.bigmarker.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BigmarkerCollector.CONFIG);
    }
}
