
import { SketchCollector } from '../../sketchCollector';

export class MeinNapa3Collector extends SketchCollector {

    static CONFIG = {
        id: "mein_napa3",
        name: "Mein Napa3",
        description: "i18n.collectors.mein_napa3.description",
        version: "0",
        website: "https://www.mein-napa3.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1627073.jpg",
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
        entryUrl: "https://www.mein-napa3.de/",
    }

    constructor() {
        super(MeinNapa3Collector.CONFIG);
    }
}
