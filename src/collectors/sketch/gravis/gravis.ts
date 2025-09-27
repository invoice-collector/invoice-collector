
import { SketchCollector } from '../../sketchCollector';

export class GravisCollector extends SketchCollector {

    static CONFIG = {
        id: "gravis",
        name: "Gravis",
        description: "i18n.collectors.gravis.description",
        version: "0",
        website: "http://www.gravis.de/index.php?cl=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517.jpg",
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
        entryUrl: "http://www.gravis.de/index.php?cl=account",
    }

    constructor() {
        super(GravisCollector.CONFIG);
    }
}
