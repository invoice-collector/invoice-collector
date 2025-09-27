
import { SketchCollector } from '../../sketchCollector';

export class FashyCollector extends SketchCollector {

    static CONFIG = {
        id: "fashy",
        name: "Fashy",
        description: "i18n.collectors.fashy.description",
        version: "0",
        website: "https://www.fashy.de/b2b/de/account/?action=document_archive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220438.jpg",
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
        entryUrl: "https://www.fashy.de/b2b/de/account/?action=document_archive",
    }

    constructor() {
        super(FashyCollector.CONFIG);
    }
}
