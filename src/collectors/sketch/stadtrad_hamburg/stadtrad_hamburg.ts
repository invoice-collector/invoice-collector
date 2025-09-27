
import { SketchCollector } from '../../sketchCollector';

export class StadtradHamburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtrad_hamburg",
        name: "Stadtrad Hamburg",
        description: "i18n.collectors.stadtrad_hamburg.description",
        version: "0",
        website: "https://stadtrad.hamburg.de/de/kundenbereich",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1179.jpg",
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
        entryUrl: "https://stadtrad.hamburg.de/de/kundenbereich",
    }

    constructor() {
        super(StadtradHamburgCollector.CONFIG);
    }
}
