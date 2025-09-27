
import { SketchCollector } from '../../sketchCollector';

export class LebendigesLandCollector extends SketchCollector {

    static CONFIG = {
        id: "lebendiges_land",
        name: "Lebendiges Land",
        description: "i18n.collectors.lebendiges_land.description",
        version: "0",
        website: "https://www.lebendiges-land.de/shop/logon.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2211138.jpg",
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
        entryUrl: "https://www.lebendiges-land.de/shop/logon.html",
    }

    constructor() {
        super(LebendigesLandCollector.CONFIG);
    }
}
