
import { SketchCollector } from '../../sketchCollector';

export class DrSchnellCollector extends SketchCollector {

    static CONFIG = {
        id: "dr_schnell",
        name: "Dr. Schnell",
        description: "i18n.collectors.dr_schnell.description",
        version: "0",
        website: "https://www.dr-schnell.com/b2border",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732070.jpg",
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
        entryUrl: "https://www.dr-schnell.com/b2border",
    }

    constructor() {
        super(DrSchnellCollector.CONFIG);
    }
}
