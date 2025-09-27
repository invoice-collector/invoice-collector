
import { SketchCollector } from '../../sketchCollector';

export class FontsComCollector extends SketchCollector {

    static CONFIG = {
        id: "fonts_com",
        name: "Fonts.com",
        description: "i18n.collectors.fonts_com.description",
        version: "0",
        website: "https://www.fonts.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/376.jpg",
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
        entryUrl: "https://www.fonts.com",
    }

    constructor() {
        super(FontsComCollector.CONFIG);
    }
}
