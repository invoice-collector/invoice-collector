
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NovasolCollector extends SketchCollector {

    static CONFIG = {
        id: "novasol",
        name: "Novasol",
        description: "i18n.collectors.novasol.description",
        version: "0",
        website: "https://www.novasol.dk/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31082.jpg",
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
        entryUrl: "https://www.novasol.dk/user/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NovasolCollector.CONFIG);
    }
}
