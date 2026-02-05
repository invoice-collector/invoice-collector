
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HamburgerVerkehrsbetriebeHvvCollector extends SketchCollector {

    static CONFIG = {
        id: "hamburger_verkehrsbetriebe_hvv",
        name: "Hamburger Verkehrsbetriebe - HVV",
        description: "i18n.collectors.hamburger_verkehrsbetriebe_hvv.description",
        version: "0",
        website: "https://shop.hvv.de/personal_data/orderList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20248.jpg",
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
        loginUrl: "https://shop.hvv.de/personal_data/orderList",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HamburgerVerkehrsbetriebeHvvCollector.CONFIG);
    }
}
