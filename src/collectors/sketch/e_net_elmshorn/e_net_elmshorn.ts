
import { SketchCollector } from '../../sketchCollector';

export class ENetElmshornCollector extends SketchCollector {

    static CONFIG = {
        id: "e_net_elmshorn",
        name: "E.Net - Elmshorn",
        description: "i18n.collectors.e_net_elmshorn.description",
        version: "0",
        website: "https://mein.epunktnet.de/group/myenet/meinvertrag/rechnungsarchiv",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698769.jpg",
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
        entryUrl: "https://mein.epunktnet.de/group/myenet/meinvertrag/rechnungsarchiv",
    }

    constructor() {
        super(ENetElmshornCollector.CONFIG);
    }
}
