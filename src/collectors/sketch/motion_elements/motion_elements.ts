
import { SketchCollector } from '../../sketchCollector';

export class MotionElementsCollector extends SketchCollector {

    static CONFIG = {
        id: "motion_elements",
        name: "Motion Elements",
        description: "i18n.collectors.motion_elements.description",
        version: "0",
        website: "https://www.motionelements.com/de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28702.jpg",
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
        entryUrl: "https://www.motionelements.com/de/account/login",
    }

    constructor() {
        super(MotionElementsCollector.CONFIG);
    }
}
