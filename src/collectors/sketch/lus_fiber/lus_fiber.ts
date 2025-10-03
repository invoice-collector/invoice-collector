
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LusFiberCollector extends SketchCollector {

    static CONFIG = {
        id: "lus_fiber",
        name: "LUS Fiber",
        description: "i18n.collectors.lus_fiber.description",
        version: "0",
        website: "https://esp.lusfiber.com/esp/security/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88458.jpg",
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
        entryUrl: "https://esp.lusfiber.com/esp/security/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LusFiberCollector.CONFIG);
    }
}
