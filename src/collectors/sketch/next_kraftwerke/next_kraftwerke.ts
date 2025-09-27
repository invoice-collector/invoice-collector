
import { SketchCollector } from '../../sketchCollector';

export class NextKraftwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "next_kraftwerke",
        name: "Next Kraftwerke",
        description: "i18n.collectors.next_kraftwerke.description",
        version: "0",
        website: "https://mein-kraftwerk.next-kraftwerke.de/document/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2656513.jpg",
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
        entryUrl: "https://mein-kraftwerk.next-kraftwerke.de/document/invoices",
    }

    constructor() {
        super(NextKraftwerkeCollector.CONFIG);
    }
}
