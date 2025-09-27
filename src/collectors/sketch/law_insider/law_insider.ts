
import { SketchCollector } from '../../sketchCollector';

export class LawInsiderCollector extends SketchCollector {

    static CONFIG = {
        id: "law_insider",
        name: "Law Insider",
        description: "i18n.collectors.law_insider.description",
        version: "0",
        website: "https://www.lawinsider.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/573014.jpg",
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
        entryUrl: "https://www.lawinsider.com/",
    }

    constructor() {
        super(LawInsiderCollector.CONFIG);
    }
}
