
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BriteverifyCollector extends SketchCollector {

    static CONFIG = {
        id: "briteverify",
        name: "BriteVerify",
        description: "i18n.collectors.briteverify.description",
        version: "0",
        website: "https://app.briteverify.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43179.jpg",
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
        entryUrl: "https://app.briteverify.com/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BriteverifyCollector.CONFIG);
    }
}
