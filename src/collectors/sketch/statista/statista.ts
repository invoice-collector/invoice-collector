
import { SketchCollector } from '../../sketchCollector';

export class StatistaCollector extends SketchCollector {

    static CONFIG = {
        id: "statista",
        name: "Statista",
        description: "i18n.collectors.statista.description",
        version: "0",
        website: "https://de.statista.com/profil/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56749.jpg",
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
        entryUrl: "https://de.statista.com/profil/rechnungen/",
    }

    constructor() {
        super(StatistaCollector.CONFIG);
    }
}
