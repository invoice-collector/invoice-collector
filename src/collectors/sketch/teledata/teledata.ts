
import { SketchCollector } from '../../sketchCollector';

export class TeledataCollector extends SketchCollector {

    static CONFIG = {
        id: "teledata",
        name: "TeleData",
        description: "i18n.collectors.teledata.description",
        version: "0",
        website: "https://kundenlogin.teledata-fn.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9190.jpg",
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
        entryUrl: "https://kundenlogin.teledata-fn.de/",
    }

    constructor() {
        super(TeledataCollector.CONFIG);
    }
}
