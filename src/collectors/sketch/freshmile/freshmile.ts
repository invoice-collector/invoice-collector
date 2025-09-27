
import { SketchCollector } from '../../sketchCollector';

export class FreshmileCollector extends SketchCollector {

    static CONFIG = {
        id: "freshmile",
        name: "freshmile",
        description: "i18n.collectors.freshmile.description",
        version: "0",
        website: "https://charge.freshmile.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927151.jpg",
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
        entryUrl: "https://charge.freshmile.com/login",
    }

    constructor() {
        super(FreshmileCollector.CONFIG);
    }
}
