
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BarmeniaAdcuriMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "barmenia_adcuri_maklerportal",
        name: "Barmenia - Adcuri Maklerportal",
        description: "i18n.collectors.barmenia_adcuri_maklerportal.description",
        version: "0",
        website: "https://ssl.barmenia24.de/PostBoxWeb/postbox.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73651.jpg",
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
        loginUrl: "https://ssl.barmenia24.de/PostBoxWeb/postbox.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BarmeniaAdcuriMaklerportalCollector.CONFIG);
    }
}
