import { SketchCollector } from '../../sketchCollector';

export class IdexCollector extends SketchCollector {

    static CONFIG = {
        id: "idex",
        name: "Idex",
        description: "i18n.collectors.idex.description",
        version: "0",
        website: "https://idex.fr",
        logo: "https://www.idex.fr/themes/custom/drup_theme/logo-en-color.svg",
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
        entryUrl: "https://espaceclient.idex.fr/web/guest/",
    }

    constructor() {
        super(IdexCollector.CONFIG);
    }
}
