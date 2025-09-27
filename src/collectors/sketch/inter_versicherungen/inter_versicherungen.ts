
import { SketchCollector } from '../../sketchCollector';

export class InterVersicherungenCollector extends SketchCollector {

    static CONFIG = {
        id: "inter_versicherungen",
        name: "Inter Versicherungen",
        description: "i18n.collectors.inter_versicherungen.description",
        version: "0",
        website: "https://www.inter.de/postbox/documents?client=kunde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/234225.jpg",
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
        entryUrl: "https://www.inter.de/postbox/documents?client=kunde",
    }

    constructor() {
        super(InterVersicherungenCollector.CONFIG);
    }
}
