
import { SketchCollector } from '../../sketchCollector';

export class TyroCollector extends SketchCollector {

    static CONFIG = {
        id: "tyro",
        name: "tyro",
        description: "i18n.collectors.tyro.description",
        version: "0",
        website: "https://www.tyro.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747804.jpg",
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
        entryUrl: "https://www.tyro.com/",
    }

    constructor() {
        super(TyroCollector.CONFIG);
    }
}
