
import { SketchCollector } from '../../sketchCollector';

export class ExonetCollector extends SketchCollector {

    static CONFIG = {
        id: "exonet",
        name: "Exonet",
        description: "i18n.collectors.exonet.description",
        version: "0",
        website: "https://www.exonet.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33135.jpg",
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
        entryUrl: "https://www.exonet.nl/inloggen",
    }

    constructor() {
        super(ExonetCollector.CONFIG);
    }
}
