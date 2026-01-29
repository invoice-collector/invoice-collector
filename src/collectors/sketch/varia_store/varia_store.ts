
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VariaStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "varia_store",
        name: "Varia-Store",
        description: "i18n.collectors.varia_store.description",
        version: "0",
        website: "https://varia-store.com/de/mein-konto/bestellungen/uebersicht.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65711.jpg",
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
        loginUrl: "https://varia-store.com/de/mein-konto/bestellungen/uebersicht.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VariaStoreCollector.CONFIG);
    }
}
