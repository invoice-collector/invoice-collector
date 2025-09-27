
import { SketchCollector } from '../../sketchCollector';

export class FilmoraCollector extends SketchCollector {

    static CONFIG = {
        id: "filmora",
        name: "Filmora",
        description: "i18n.collectors.filmora.description",
        version: "0",
        website: "https://support.wondershare.com/de/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444744.jpg",
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
        entryUrl: "https://support.wondershare.com/de/invoice",
    }

    constructor() {
        super(FilmoraCollector.CONFIG);
    }
}
