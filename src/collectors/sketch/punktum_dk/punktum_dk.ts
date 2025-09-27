
import { SketchCollector } from '../../sketchCollector';

export class PunktumDkCollector extends SketchCollector {

    static CONFIG = {
        id: "punktum_dk",
        name: "Punktum.dk",
        description: "i18n.collectors.punktum_dk.description",
        version: "0",
        website: "https://selvbetjening.punktum.dk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445819.jpg",
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
        entryUrl: "https://selvbetjening.punktum.dk/",
    }

    constructor() {
        super(PunktumDkCollector.CONFIG);
    }
}
