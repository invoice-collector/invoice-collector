
import { SketchCollector } from '../../sketchCollector';

export class FurioosCollector extends SketchCollector {

    static CONFIG = {
        id: "furioos",
        name: "Furioos",
        description: "i18n.collectors.furioos.description",
        version: "0",
        website: "https://portal.furioos.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173144.jpg",
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
        entryUrl: "https://portal.furioos.com/sign-in",
    }

    constructor() {
        super(FurioosCollector.CONFIG);
    }
}
