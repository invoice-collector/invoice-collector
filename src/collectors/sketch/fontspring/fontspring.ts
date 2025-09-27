
import { SketchCollector } from '../../sketchCollector';

export class FontspringCollector extends SketchCollector {

    static CONFIG = {
        id: "fontspring",
        name: "Fontspring",
        description: "i18n.collectors.fontspring.description",
        version: "0",
        website: "https://www.fontspring.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31805.jpg",
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
        entryUrl: "https://www.fontspring.com/account/login",
    }

    constructor() {
        super(FontspringCollector.CONFIG);
    }
}
