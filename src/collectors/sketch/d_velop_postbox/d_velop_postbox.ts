
import { SketchCollector } from '../../sketchCollector';

export class DVelopPostboxCollector extends SketchCollector {

    static CONFIG = {
        id: "d_velop_postbox",
        name: "d.velop postbox",
        description: "i18n.collectors.d_velop_postbox.description",
        version: "0",
        website: "https://postbox.foxdox.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4696447.jpg",
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
        entryUrl: "https://postbox.foxdox.de/documents",
    }

    constructor() {
        super(DVelopPostboxCollector.CONFIG);
    }
}
