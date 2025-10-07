
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlmCollector extends SketchCollector {

    static CONFIG = {
        id: "klm",
        name: "KLM",
        description: "i18n.collectors.klm.description",
        version: "0",
        website: "https://www.klm.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132113.jpg",
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
        entryUrl: "https://www.klm.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlmCollector.CONFIG);
    }
}
