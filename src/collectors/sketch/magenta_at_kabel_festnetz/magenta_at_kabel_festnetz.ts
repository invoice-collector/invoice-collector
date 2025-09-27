
import { SketchCollector } from '../../sketchCollector';

export class MagentaAtKabelFestnetzCollector extends SketchCollector {

    static CONFIG = {
        id: "magenta_at_kabel_festnetz",
        name: "Magenta.at - Kabel/Festnetz",
        description: "i18n.collectors.magenta_at_kabel_festnetz.description",
        version: "0",
        website: "https://service.magenta.at/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/232511.jpg",
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
        entryUrl: "https://service.magenta.at/login/",
    }

    constructor() {
        super(MagentaAtKabelFestnetzCollector.CONFIG);
    }
}
