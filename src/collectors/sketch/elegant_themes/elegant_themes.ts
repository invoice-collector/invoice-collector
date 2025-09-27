
import { SketchCollector } from '../../sketchCollector';

export class ElegantThemesCollector extends SketchCollector {

    static CONFIG = {
        id: "elegant_themes",
        name: "Elegant Themes",
        description: "i18n.collectors.elegant_themes.description",
        version: "0",
        website: "https://www.elegantthemes.com/members-area/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7883.jpg",
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
        entryUrl: "https://www.elegantthemes.com/members-area/history/",
    }

    constructor() {
        super(ElegantThemesCollector.CONFIG);
    }
}
