
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RtxPlattformCollector extends SketchCollector {

    static CONFIG = {
        id: "rtx_plattform",
        name: "RTX Plattform",
        description: "i18n.collectors.rtx_plattform.description",
        version: "0",
        website: "https://app.rtxplatform.com/account/funding/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144291.jpg",
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
        entryUrl: "https://app.rtxplatform.com/account/funding/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RtxPlattformCollector.CONFIG);
    }
}
