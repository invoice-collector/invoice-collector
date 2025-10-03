
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LearningsuiteIoOrbitCollector extends SketchCollector {

    static CONFIG = {
        id: "learningsuite_io_orbit",
        name: "Learningsuite.io Orbit",
        description: "i18n.collectors.learningsuite_io_orbit.description",
        version: "0",
        website: "https://orbit.learningsuite.io/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3732475.jpg",
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
        entryUrl: "https://orbit.learningsuite.io/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LearningsuiteIoOrbitCollector.CONFIG);
    }
}
