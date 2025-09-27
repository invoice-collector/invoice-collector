
import { SketchCollector } from '../../sketchCollector';

export class ResopharmaCollector extends SketchCollector {

    static CONFIG = {
        id: "resopharma",
        name: "Resopharma",
        description: "i18n.collectors.resopharma.description",
        version: "0",
        website: "https://www.resopharma.fr/partenaires.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/501528.jpg",
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
        entryUrl: "https://www.resopharma.fr/partenaires.php",
    }

    constructor() {
        super(ResopharmaCollector.CONFIG);
    }
}
