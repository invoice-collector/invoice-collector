
import { SketchCollector } from '../../sketchCollector';

export class HostingIrelandCollector extends SketchCollector {

    static CONFIG = {
        id: "hosting_ireland",
        name: "Hosting Ireland",
        description: "i18n.collectors.hosting_ireland.description",
        version: "0",
        website: "https://www.hostingireland.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748712.jpg",
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
        entryUrl: "https://www.hostingireland.ie/",
    }

    constructor() {
        super(HostingIrelandCollector.CONFIG);
    }
}
