
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IMotionCollector extends SketchCollector {

    static CONFIG = {
        id: "i_motion",
        name: "I-motion",
        description: "i18n.collectors.i_motion.description",
        version: "0",
        website: "http://www.i-motion.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47850.jpg",
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
        entryUrl: "http://www.i-motion.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IMotionCollector.CONFIG);
    }
}
