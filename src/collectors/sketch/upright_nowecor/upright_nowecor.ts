
import { SketchCollector } from '../../sketchCollector';

export class UprightNowecorCollector extends SketchCollector {

    static CONFIG = {
        id: "upright_nowecor",
        name: "Upright / Nowecor",
        description: "i18n.collectors.upright_nowecor.description",
        version: "0",
        website: "https://upright.nowecor.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698588.jpg",
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
        entryUrl: "https://upright.nowecor.de/",
    }

    constructor() {
        super(UprightNowecorCollector.CONFIG);
    }
}
