
import { SketchCollector } from '../../sketchCollector';

export class DreamloveCollector extends SketchCollector {

    static CONFIG = {
        id: "dreamlove",
        name: "dreamlove",
        description: "i18n.collectors.dreamlove.description",
        version: "0",
        website: "https://store.dreamlove.es/mf-1-53-mis_facturas/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097923.jpg",
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
        entryUrl: "https://store.dreamlove.es/mf-1-53-mis_facturas/",
    }

    constructor() {
        super(DreamloveCollector.CONFIG);
    }
}
