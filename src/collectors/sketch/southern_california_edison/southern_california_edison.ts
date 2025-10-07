
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SouthernCaliforniaEdisonCollector extends SketchCollector {

    static CONFIG = {
        id: "southern_california_edison",
        name: "Southern California Edison",
        description: "i18n.collectors.southern_california_edison.description",
        version: "0",
        website: "http://www.sce.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8644.jpg",
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
        entryUrl: "http://www.sce.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SouthernCaliforniaEdisonCollector.CONFIG);
    }
}
