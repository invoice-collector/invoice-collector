
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GripReifenUndRaderCollector extends SketchCollector {

    static CONFIG = {
        id: "grip_reifen_und_rader",
        name: "GRIP Reifen und Rader",
        description: "i18n.collectors.grip_reifen_und_rader.description",
        version: "0",
        website: "https://shop.gripreifenraeder.de/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3106756.jpg",
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
        loginUrl: "https://shop.gripreifenraeder.de/order-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GripReifenUndRaderCollector.CONFIG);
    }
}
