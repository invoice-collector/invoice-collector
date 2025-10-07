
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RightSignatureCollector extends SketchCollector {

    static CONFIG = {
        id: "right_signature",
        name: "Right Signature",
        description: "i18n.collectors.right_signature.description",
        version: "0",
        website: "https://rightsignature.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8832.jpg",
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
        entryUrl: "https://rightsignature.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RightSignatureCollector.CONFIG);
    }
}
