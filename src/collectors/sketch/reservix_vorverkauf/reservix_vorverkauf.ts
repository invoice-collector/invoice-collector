
import { SketchCollector } from '../../sketchCollector';

export class ReservixVorverkaufCollector extends SketchCollector {

    static CONFIG = {
        id: "reservix_vorverkauf",
        name: "Reservix Vorverkauf",
        description: "i18n.collectors.reservix_vorverkauf.description",
        version: "0",
        website: "https://system.reservix.de/off/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172961.jpg",
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
        entryUrl: "https://system.reservix.de/off/login.php",
    }

    constructor() {
        super(ReservixVorverkaufCollector.CONFIG);
    }
}
