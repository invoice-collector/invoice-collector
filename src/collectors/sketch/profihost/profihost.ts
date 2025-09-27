
import { SketchCollector } from '../../sketchCollector';

export class ProfihostCollector extends SketchCollector {

    static CONFIG = {
        id: "profihost",
        name: "Profihost",
        description: "i18n.collectors.profihost.description",
        version: "0",
        website: "https://kundenlogin.profihost.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/666.jpg",
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
        entryUrl: "https://kundenlogin.profihost.com/",
    }

    constructor() {
        super(ProfihostCollector.CONFIG);
    }
}
