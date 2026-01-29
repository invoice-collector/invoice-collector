
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelekomGeschaftskundenRechnungenCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_geschaftskunden_rechnungen",
        name: "Telekom Geschaftskunden Rechnungen",
        description: "i18n.collectors.telekom_geschaftskunden_rechnungen.description",
        version: "0",
        website: "https://rechnungonline.geschaeftskunden.telekom.de/gk/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203990.jpg",
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
        loginUrl: "https://rechnungonline.geschaeftskunden.telekom.de/gk/auth",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelekomGeschaftskundenRechnungenCollector.CONFIG);
    }
}
