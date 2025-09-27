
import { SketchCollector } from '../../sketchCollector';

export class LogoMakerCollector extends SketchCollector {

    static CONFIG = {
        id: "logo_maker",
        name: "Logo Maker",
        description: "i18n.collectors.logo_maker.description",
        version: "0",
        website: "https://www.logomaker.com/de/websites-management",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4198972.jpg",
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
        entryUrl: "https://www.logomaker.com/de/websites-management",
    }

    constructor() {
        super(LogoMakerCollector.CONFIG);
    }
}
