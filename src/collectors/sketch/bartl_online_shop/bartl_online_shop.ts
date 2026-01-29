
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BartlOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "bartl_online_shop",
        name: "Bartl Online Shop",
        description: "i18n.collectors.bartl_online_shop.description",
        version: "0",
        website: "https://b2b.bartlshop.de/de/account/?action=document_archive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728426.jpg",
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
        loginUrl: "https://b2b.bartlshop.de/de/account/?action=document_archive",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BartlOnlineShopCollector.CONFIG);
    }
}
