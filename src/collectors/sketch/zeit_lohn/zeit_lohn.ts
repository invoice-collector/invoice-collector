
import { SketchCollector } from '../../sketchCollector';

export class ZeitLohnCollector extends SketchCollector {

    static CONFIG = {
        id: "zeit_lohn",
        name: "Zeit-Lohn",
        description: "i18n.collectors.zeit_lohn.description",
        version: "0",
        website: "https://zeit-lohn.net/Home/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777209.jpg",
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
        entryUrl: "https://zeit-lohn.net/Home/Index",
    }

    constructor() {
        super(ZeitLohnCollector.CONFIG);
    }
}
