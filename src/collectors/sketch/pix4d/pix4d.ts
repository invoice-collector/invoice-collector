
import { SketchCollector } from '../../sketchCollector';

export class Pix4dCollector extends SketchCollector {

    static CONFIG = {
        id: "pix4d",
        name: "Pix4D",
        description: "i18n.collectors.pix4d.description",
        version: "0",
        website: "https://cloud.pix4d.com/account/licenses/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194677.jpg",
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
        entryUrl: "https://cloud.pix4d.com/account/licenses/",
    }

    constructor() {
        super(Pix4dCollector.CONFIG);
    }
}
