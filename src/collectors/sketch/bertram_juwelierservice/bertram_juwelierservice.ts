
import { SketchCollector } from '../../sketchCollector';

export class BertramJuwelierserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "bertram_juwelierservice",
        name: "Bertram Juwelierservice",
        description: "i18n.collectors.bertram_juwelierservice.description",
        version: "0",
        website: "https://wertversand.bertram-juwelierservice.de/de/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2670004.jpg",
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
        entryUrl: "https://wertversand.bertram-juwelierservice.de/de/invoice",
    }

    constructor() {
        super(BertramJuwelierserviceCollector.CONFIG);
    }
}
