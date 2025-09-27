
import { SketchCollector } from '../../sketchCollector';

export class GefelicitaartCollector extends SketchCollector {

    static CONFIG = {
        id: "gefelicitaart",
        name: "gefeliciTAART",
        description: "i18n.collectors.gefelicitaart.description",
        version: "0",
        website: "https://www.gefelicitaart.nl/mijngegevens/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32565.jpg",
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
        entryUrl: "https://www.gefelicitaart.nl/mijngegevens/index.html",
    }

    constructor() {
        super(GefelicitaartCollector.CONFIG);
    }
}
