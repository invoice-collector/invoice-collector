
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelekomRechnungOnlineBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_rechnung_online_business",
        name: "Telekom Rechnung Online Business",
        description: "i18n.collectors.telekom_rechnung_online_business.description",
        version: "0",
        website: "https://rechnung.geschaeftskunden.telekom.de/kv/belege_uebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1270261.jpg",
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
        loginUrl: "https://rechnung.geschaeftskunden.telekom.de/kv/belege_uebersicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelekomRechnungOnlineBusinessCollector.CONFIG);
    }
}
