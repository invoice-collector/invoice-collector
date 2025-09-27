
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeMuhlheimCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_muhlheim",
        name: "Stadtwerke Muhlheim",
        description: "i18n.collectors.stadtwerke_muhlheim.description",
        version: "0",
        website: "https://www.stadtwerke-muehlheim.de/de/Kopfnavigation/Kundenportale/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2549082.jpg",
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
        entryUrl: "https://www.stadtwerke-muehlheim.de/de/Kopfnavigation/Kundenportale/",
    }

    constructor() {
        super(StadtwerkeMuhlheimCollector.CONFIG);
    }
}
