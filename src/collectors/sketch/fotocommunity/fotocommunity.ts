
import { SketchCollector } from '../../sketchCollector';

export class FotocommunityCollector extends SketchCollector {

    static CONFIG = {
        id: "fotocommunity",
        name: "Fotocommunity",
        description: "i18n.collectors.fotocommunity.description",
        version: "0",
        website: "https://www.fotocommunity.de/settings/premium",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386523.jpg",
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
        entryUrl: "https://www.fotocommunity.de/settings/premium",
    }

    constructor() {
        super(FotocommunityCollector.CONFIG);
    }
}
