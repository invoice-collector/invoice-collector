
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpartooCollector extends SketchCollector {

    static CONFIG = {
        id: "spartoo",
        name: "Spartoo",
        description: "i18n.collectors.spartoo.description",
        version: "0",
        website: "https://www.spartoo.com/securelogin.php?from=compte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123506.jpg",
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
        entryUrl: "https://www.spartoo.com/securelogin.php?from=compte",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpartooCollector.CONFIG);
    }
}
