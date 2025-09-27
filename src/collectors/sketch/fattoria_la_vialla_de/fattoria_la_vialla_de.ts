
import { SketchCollector } from '../../sketchCollector';

export class FattoriaLaViallaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "fattoria_la_vialla_de",
        name: "Fattoria La Vialla (de)",
        description: "i18n.collectors.fattoria_la_vialla_de.description",
        version: "0",
        website: "https://www.lavialla.com/de-DE/meine-bestellungen-und-lieferungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220275.jpg",
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
        entryUrl: "https://www.lavialla.com/de-DE/meine-bestellungen-und-lieferungen/",
    }

    constructor() {
        super(FattoriaLaViallaDeCollector.CONFIG);
    }
}
