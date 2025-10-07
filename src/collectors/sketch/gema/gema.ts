
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GemaCollector extends SketchCollector {

    static CONFIG = {
        id: "gema",
        name: "GEMA",
        description: "i18n.collectors.gema.description",
        version: "0",
        website: "https://www.gema.de/portal/app/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132474.jpg",
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
        entryUrl: "https://www.gema.de/portal/app/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GemaCollector.CONFIG);
    }
}
