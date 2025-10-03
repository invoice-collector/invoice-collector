
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SuperprofCollector extends SketchCollector {

    static CONFIG = {
        id: "superprof",
        name: "superprof",
        description: "i18n.collectors.superprof.description",
        version: "0",
        website: "https://www.superprof.de/dashboard.html/premium",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185036.jpg",
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
        entryUrl: "https://www.superprof.de/dashboard.html/premium",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SuperprofCollector.CONFIG);
    }
}
