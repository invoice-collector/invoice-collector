
import { SketchCollector } from '../../sketchCollector';

export class OnvistaBankCollector extends SketchCollector {

    static CONFIG = {
        id: "onvista_bank",
        name: "onvista bank",
        description: "i18n.collectors.onvista_bank.description",
        version: "0",
        website: "https://www.onvista-bank.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110964.jpg",
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
        entryUrl: "https://www.onvista-bank.de/",
    }

    constructor() {
        super(OnvistaBankCollector.CONFIG);
    }
}
