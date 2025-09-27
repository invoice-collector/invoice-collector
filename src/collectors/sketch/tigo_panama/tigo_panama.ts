
import { SketchCollector } from '../../sketchCollector';

export class TigoPanamaCollector extends SketchCollector {

    static CONFIG = {
        id: "tigo_panama",
        name: "Tigo Panama",
        description: "i18n.collectors.tigo_panama.description",
        version: "0",
        website: "https://mi.tigo.com.pa/movil/facturacion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347079.jpg",
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
        entryUrl: "https://mi.tigo.com.pa/movil/facturacion",
    }

    constructor() {
        super(TigoPanamaCollector.CONFIG);
    }
}
