
import { SketchCollector } from '../../sketchCollector';

export class GeschaftskundenDeutscheTelekomMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "geschaftskunden_deutsche_telekom_mobil",
        name: "Geschaftskunden Deutsche Telekom Mobil",
        description: "i18n.collectors.geschaftskunden_deutsche_telekom_mobil.description",
        version: "0",
        website: "https://mbsp.geschaeftskunden.telekom.de/mbsp/noaccess",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2022228.jpg",
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
        entryUrl: "https://mbsp.geschaeftskunden.telekom.de/mbsp/noaccess",
    }

    constructor() {
        super(GeschaftskundenDeutscheTelekomMobilCollector.CONFIG);
    }
}
