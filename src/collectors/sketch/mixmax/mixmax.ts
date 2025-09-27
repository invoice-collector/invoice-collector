
import { SketchCollector } from '../../sketchCollector';

export class MixmaxCollector extends SketchCollector {

    static CONFIG = {
        id: "mixmax",
        name: "Mixmax",
        description: "i18n.collectors.mixmax.description",
        version: "0",
        website: "https://app.mixmax.com/dashboard?login=new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28523.jpg",
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
        entryUrl: "https://app.mixmax.com/dashboard?login=new",
    }

    constructor() {
        super(MixmaxCollector.CONFIG);
    }
}
