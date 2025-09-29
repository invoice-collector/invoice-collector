import { SketchCollector } from '../../sketchCollector';

export class KfcFrCollector extends SketchCollector {

    static CONFIG = {
        id: "kfcfr",
        name: "KFC",
        description: "i18n.collectors.kfcfr.description",
        version: "0",
        website: "https://kfc.fr",
        logo: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
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
        }
    }

    constructor() {
        super(KfcFrCollector.CONFIG);
    }
}
