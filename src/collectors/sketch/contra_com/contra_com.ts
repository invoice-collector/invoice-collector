
import { SketchCollector } from '../../sketchCollector';

export class ContraComCollector extends SketchCollector {

    static CONFIG = {
        id: "contra_com",
        name: "Contra.com",
        description: "i18n.collectors.contra_com.description",
        version: "0",
        website: "https://contra.com/client/projects/WyJQYWlkUHJvamVjdFYyIiw1NDIwMDIyXQ==?tab=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2792843.jpg",
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
        entryUrl: "https://contra.com/client/projects/WyJQYWlkUHJvamVjdFYyIiw1NDIwMDIyXQ==?tab=invoices",
    }

    constructor() {
        super(ContraComCollector.CONFIG);
    }
}
