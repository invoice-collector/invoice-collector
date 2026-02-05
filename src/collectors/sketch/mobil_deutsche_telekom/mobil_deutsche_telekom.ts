
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MobilDeutscheTelekomCollector extends SketchCollector {

    static CONFIG = {
        id: "mobil_deutsche_telekom",
        name: "Mobil Deutsche Telekom",
        description: "i18n.collectors.mobil_deutsche_telekom.description",
        version: "0",
        website: "https://rechnungonline.geschaeftskunden.telekom.de/gk/ben_ges_dok_ueb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1361511.jpg",
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
        loginUrl: "https://rechnungonline.geschaeftskunden.telekom.de/gk/ben_ges_dok_ueb",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MobilDeutscheTelekomCollector.CONFIG);
    }
}
