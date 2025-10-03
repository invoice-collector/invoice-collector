
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CodeinterviewCollector extends SketchCollector {

    static CONFIG = {
        id: "codeinterview",
        name: "CodeInterview",
        description: "i18n.collectors.codeinterview.description",
        version: "0",
        website: "https://codeinterview.io/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/435452.jpg",
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
        entryUrl: "https://codeinterview.io/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CodeinterviewCollector.CONFIG);
    }
}
