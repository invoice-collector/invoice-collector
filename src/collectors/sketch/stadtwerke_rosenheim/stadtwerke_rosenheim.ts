
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeRosenheimCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_rosenheim",
        name: "Stadtwerke Rosenheim",
        description: "i18n.collectors.stadtwerke_rosenheim.description",
        version: "0",
        website: "https://www.swro.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69636.jpg",
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
        entryUrl: "https://www.swro.de/",
    }

    constructor() {
        super(StadtwerkeRosenheimCollector.CONFIG);
    }
}
