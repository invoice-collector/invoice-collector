
import { SketchCollector } from '../../sketchCollector';

export class CorsizioCollector extends SketchCollector {

    static CONFIG = {
        id: "corsizio",
        name: "Corsizio",
        description: "i18n.collectors.corsizio.description",
        version: "0",
        website: "https://manager.corsizio.com/attendees",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336514.jpg",
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
        entryUrl: "https://manager.corsizio.com/attendees",
    }

    constructor() {
        super(CorsizioCollector.CONFIG);
    }
}
