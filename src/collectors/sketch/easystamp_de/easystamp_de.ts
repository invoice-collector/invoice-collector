
import { SketchCollector } from '../../sketchCollector';

export class EasystampDeCollector extends SketchCollector {

    static CONFIG = {
        id: "easystamp_de",
        name: "Easystamp.de",
        description: "i18n.collectors.easystamp_de.description",
        version: "0",
        website: "https://www.easystamp.de/einloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33370.jpg",
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
        entryUrl: "https://www.easystamp.de/einloggen",
    }

    constructor() {
        super(EasystampDeCollector.CONFIG);
    }
}
