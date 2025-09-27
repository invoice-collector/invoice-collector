
import { SketchCollector } from '../../sketchCollector';

export class MotionarrayCollector extends SketchCollector {

    static CONFIG = {
        id: "motionarray",
        name: "MotionArray",
        description: "i18n.collectors.motionarray.description",
        version: "0",
        website: "https://motionarray.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131010.jpg",
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
        entryUrl: "https://motionarray.com/account/login",
    }

    constructor() {
        super(MotionarrayCollector.CONFIG);
    }
}
