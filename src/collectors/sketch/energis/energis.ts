
import { SketchCollector } from '../../sketchCollector';

export class EnergisCollector extends SketchCollector {

    static CONFIG = {
        id: "energis",
        name: "Energis",
        description: "i18n.collectors.energis.description",
        version: "0",
        website: "https://meine.energis.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150512.jpg",
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
        entryUrl: "https://meine.energis.de/",
    }

    constructor() {
        super(EnergisCollector.CONFIG);
    }
}
