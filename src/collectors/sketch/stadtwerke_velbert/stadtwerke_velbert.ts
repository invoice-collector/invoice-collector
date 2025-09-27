
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeVelbertCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_velbert",
        name: "Stadtwerke Velbert",
        description: "i18n.collectors.stadtwerke_velbert.description",
        version: "0",
        website: "https://meine.stadtwerke-velbert.de/privatkunden/meine-velbert/services",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445879.jpg",
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
        entryUrl: "https://meine.stadtwerke-velbert.de/privatkunden/meine-velbert/services",
    }

    constructor() {
        super(StadtwerkeVelbertCollector.CONFIG);
    }
}
