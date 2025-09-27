
import { SketchCollector } from '../../sketchCollector';

export class KfzBetriebVogelCollector extends SketchCollector {

    static CONFIG = {
        id: "kfz_betrieb_vogel",
        name: "KFZ-Betrieb Vogel",
        description: "i18n.collectors.kfz_betrieb_vogel.description",
        version: "0",
        website: "https://www.kfz-betrieb.vogel.de/anmelden/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3119267.jpg",
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
        entryUrl: "https://www.kfz-betrieb.vogel.de/anmelden/",
    }

    constructor() {
        super(KfzBetriebVogelCollector.CONFIG);
    }
}
