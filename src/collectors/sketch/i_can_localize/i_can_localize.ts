
import { SketchCollector } from '../../sketchCollector';

export class ICanLocalizeCollector extends SketchCollector {

    static CONFIG = {
        id: "i_can_localize",
        name: "I Can Localize",
        description: "i18n.collectors.i_can_localize.description",
        version: "0",
        website: "https://www.icanlocalize.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7987.jpg",
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
        entryUrl: "https://www.icanlocalize.com/login/",
    }

    constructor() {
        super(ICanLocalizeCollector.CONFIG);
    }
}
