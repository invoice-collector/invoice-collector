
import { SketchCollector } from '../../sketchCollector';

export class NeubaukompassCollector extends SketchCollector {

    static CONFIG = {
        id: "neubaukompass",
        name: "Neubaukompass",
        description: "i18n.collectors.neubaukompass.description",
        version: "0",
        website: "https://partner.neubaukompass.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3111146.jpg",
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
        entryUrl: "https://partner.neubaukompass.de/login",
    }

    constructor() {
        super(NeubaukompassCollector.CONFIG);
    }
}
