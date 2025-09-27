
import { SketchCollector } from '../../sketchCollector';

export class MotionvfxCollector extends SketchCollector {

    static CONFIG = {
        id: "motionvfx",
        name: "MotionVFX",
        description: "i18n.collectors.motionvfx.description",
        version: "0",
        website: "https://www.motionvfx.com/account,order_history.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37599.jpg",
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
        entryUrl: "https://www.motionvfx.com/account,order_history.html",
    }

    constructor() {
        super(MotionvfxCollector.CONFIG);
    }
}
