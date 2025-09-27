
import { SketchCollector } from '../../sketchCollector';

export class EveryoneonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "everyoneonline",
        name: "EveryoneOnline",
        description: "i18n.collectors.everyoneonline.description",
        version: "0",
        website: "https://mijn.everyoneonline.nl/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32659.jpg",
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
        entryUrl: "https://mijn.everyoneonline.nl/clientarea.php",
    }

    constructor() {
        super(EveryoneonlineCollector.CONFIG);
    }
}
