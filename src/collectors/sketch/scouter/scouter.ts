
import { SketchCollector } from '../../sketchCollector';

export class ScouterCollector extends SketchCollector {

    static CONFIG = {
        id: "scouter",
        name: "Scouter",
        description: "i18n.collectors.scouter.description",
        version: "0",
        website: "https://scouter.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45286.jpg",
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
        entryUrl: "https://scouter.de/login/",
    }

    constructor() {
        super(ScouterCollector.CONFIG);
    }
}
