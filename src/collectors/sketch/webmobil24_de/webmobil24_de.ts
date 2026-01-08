
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Webmobil24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "webmobil24_de",
        name: "Webmobil24.de",
        description: "i18n.collectors.webmobil24_de.description",
        version: "0",
        website: "https://secure.webmobil24.com/web/de/secure/einstellungen/rechnungsverwaltung.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747383.jpg",
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
        loginUrl: "https://secure.webmobil24.com/web/de/secure/einstellungen/rechnungsverwaltung.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Webmobil24DeCollector.CONFIG);
    }
}
