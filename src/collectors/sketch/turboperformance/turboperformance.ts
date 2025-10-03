
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TurboperformanceCollector extends SketchCollector {

    static CONFIG = {
        id: "turboperformance",
        name: "turboperformance",
        description: "i18n.collectors.turboperformance.description",
        version: "0",
        website: "https://fes.turboperformance.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524642.jpg",
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
        entryUrl: "https://fes.turboperformance.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TurboperformanceCollector.CONFIG);
    }
}
