
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FpSignCollector extends SketchCollector {

    static CONFIG = {
        id: "fp_sign",
        name: "FP Sign",
        description: "i18n.collectors.fp_sign.description",
        version: "0",
        website: "https://admin.fp-sign.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2418838.jpg",
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
        entryUrl: "https://admin.fp-sign.com/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FpSignCollector.CONFIG);
    }
}
