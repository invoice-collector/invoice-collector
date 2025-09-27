
import { SketchCollector } from '../../sketchCollector';

export class NewshaProCollector extends SketchCollector {

    static CONFIG = {
        id: "newsha_pro",
        name: "Newsha Pro",
        description: "i18n.collectors.newsha_pro.description",
        version: "0",
        website: "https://www.newsha.pro/bestellungen/meinerechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213253.jpg",
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
        entryUrl: "https://www.newsha.pro/bestellungen/meinerechnungen/",
    }

    constructor() {
        super(NewshaProCollector.CONFIG);
    }
}
