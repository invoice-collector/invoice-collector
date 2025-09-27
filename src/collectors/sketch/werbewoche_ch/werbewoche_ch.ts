
import { SketchCollector } from '../../sketchCollector';

export class WerbewocheChCollector extends SketchCollector {

    static CONFIG = {
        id: "werbewoche_ch",
        name: "Werbewoche CH",
        description: "i18n.collectors.werbewoche_ch.description",
        version: "0",
        website: "https://www.werbewoche.ch/de/account/view-order/197840/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063530.jpg",
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
        entryUrl: "https://www.werbewoche.ch/de/account/view-order/197840/",
    }

    constructor() {
        super(WerbewocheChCollector.CONFIG);
    }
}
