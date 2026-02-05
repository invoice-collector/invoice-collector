
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnitedKioskCollector extends SketchCollector {

    static CONFIG = {
        id: "united_kiosk",
        name: "United Kiosk",
        description: "i18n.collectors.united_kiosk.description",
        version: "0",
        website: "https://www.united-kiosk.de/bibliothek/user/meine-epaper/alle-epaper/all_user_products?folderId=2120912",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025538.jpg",
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
        loginUrl: "https://www.united-kiosk.de/bibliothek/user/meine-epaper/alle-epaper/all_user_products?folderId=2120912",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UnitedKioskCollector.CONFIG);
    }
}
