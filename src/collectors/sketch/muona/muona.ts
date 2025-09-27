
import { SketchCollector } from '../../sketchCollector';

export class MuonaCollector extends SketchCollector {

    static CONFIG = {
        id: "muona",
        name: "Muona",
        description: "i18n.collectors.muona.description",
        version: "0",
        website: "https://moncompte.muona.com/index.php?p=MonCompteClientFacture/main&tab=1&id=1706",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487089.jpg",
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
        entryUrl: "https://moncompte.muona.com/index.php?p=MonCompteClientFacture/main&tab=1&id=1706",
    }

    constructor() {
        super(MuonaCollector.CONFIG);
    }
}
