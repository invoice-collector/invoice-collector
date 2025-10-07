
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BiteablePtyLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "biteable_pty_ltd",
        name: "Biteable Pty Ltd",
        description: "i18n.collectors.biteable_pty_ltd.description",
        version: "0",
        website: "https://app.biteable.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50492.jpg",
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
        entryUrl: "https://app.biteable.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BiteablePtyLtdCollector.CONFIG);
    }
}
