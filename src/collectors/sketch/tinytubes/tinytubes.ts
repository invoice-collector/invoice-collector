
import { SketchCollector } from '../../sketchCollector';

export class TinytubesCollector extends SketchCollector {

    static CONFIG = {
        id: "tinytubes",
        name: "TinyTubes",
        description: "i18n.collectors.tinytubes.description",
        version: "0",
        website: "https://tiny-tubes.fr/index.php?route=account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123496.jpg",
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
        entryUrl: "https://tiny-tubes.fr/index.php?route=account/login",
    }

    constructor() {
        super(TinytubesCollector.CONFIG);
    }
}
