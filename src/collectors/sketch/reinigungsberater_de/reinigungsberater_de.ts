
import { SketchCollector } from '../../sketchCollector';

export class ReinigungsberaterDeCollector extends SketchCollector {

    static CONFIG = {
        id: "reinigungsberater_de",
        name: "Reinigungsberater.de",
        description: "i18n.collectors.reinigungsberater_de.description",
        version: "0",
        website: "https://www.reinigungsberater.de/mein_konto/uebersicht.php?kontolink=meine_bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22233.jpg",
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
        entryUrl: "https://www.reinigungsberater.de/mein_konto/uebersicht.php?kontolink=meine_bestellungen",
    }

    constructor() {
        super(ReinigungsberaterDeCollector.CONFIG);
    }
}
