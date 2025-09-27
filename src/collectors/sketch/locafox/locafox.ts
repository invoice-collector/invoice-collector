
import { SketchCollector } from '../../sketchCollector';

export class LocafoxCollector extends SketchCollector {

    static CONFIG = {
        id: "locafox",
        name: "LocaFox",
        description: "i18n.collectors.locafox.description",
        version: "0",
        website: "https://pos.locafox.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40974.jpg",
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
        entryUrl: "https://pos.locafox.de/",
    }

    constructor() {
        super(LocafoxCollector.CONFIG);
    }
}
