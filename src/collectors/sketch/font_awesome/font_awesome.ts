
import { SketchCollector } from '../../sketchCollector';

export class FontAwesomeCollector extends SketchCollector {

    static CONFIG = {
        id: "font_awesome",
        name: "Font Awesome",
        description: "i18n.collectors.font_awesome.description",
        version: "0",
        website: "https://fontawesome.com/sessions/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39399.jpg",
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
        entryUrl: "https://fontawesome.com/sessions/sign-in",
    }

    constructor() {
        super(FontAwesomeCollector.CONFIG);
    }
}
