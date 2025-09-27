
import { SketchCollector } from '../../sketchCollector';

export class PagesJaunesBusinessCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "pages_jaunes_business_center",
        name: "Pages Jaunes Business Center",
        description: "i18n.collectors.pages_jaunes_business_center.description",
        version: "0",
        website: "https://businesscenter.pagesjaunes.fr/nouvelles_audiences/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778274.jpg",
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
        entryUrl: "https://businesscenter.pagesjaunes.fr/nouvelles_audiences/",
    }

    constructor() {
        super(PagesJaunesBusinessCenterCollector.CONFIG);
    }
}
