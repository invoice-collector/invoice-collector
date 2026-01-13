
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AutoteileweltHandlerShopCollector extends SketchCollector {

    static CONFIG = {
        id: "autoteilewelt_handler_shop",
        name: "Autoteilewelt Handler Shop",
        description: "i18n.collectors.autoteilewelt_handler_shop.description",
        version: "0",
        website: "https://shop.autoteilewelt.de/efa704/opencms/html/de/01_Division/X/Home/Haendlerbereich/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/388068.jpg",
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
        loginUrl: "https://shop.autoteilewelt.de/efa704/opencms/html/de/01_Division/X/Home/Haendlerbereich/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutoteileweltHandlerShopCollector.CONFIG);
    }
}
