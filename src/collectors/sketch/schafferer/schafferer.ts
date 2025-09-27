
import { SketchCollector } from '../../sketchCollector';

export class SchaffererCollector extends SketchCollector {

    static CONFIG = {
        id: "schafferer",
        name: "Schafferer",
        description: "i18n.collectors.schafferer.description",
        version: "0",
        website: "https://www.schafferer.de/gastro/Mein-Konto/Meine-Einkaeufe/#action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148949.jpg",
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
        entryUrl: "https://www.schafferer.de/gastro/Mein-Konto/Meine-Einkaeufe/#action",
    }

    constructor() {
        super(SchaffererCollector.CONFIG);
    }
}
