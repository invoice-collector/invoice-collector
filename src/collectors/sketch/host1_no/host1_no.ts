
import { SketchCollector } from '../../sketchCollector';

export class Host1NoCollector extends SketchCollector {

    static CONFIG = {
        id: "host1_no",
        name: "HOST1.no",
        description: "i18n.collectors.host1_no.description",
        version: "0",
        website: "https://host1.no/client/clientarea.php?language=Norwegian",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9478.jpg",
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
        entryUrl: "https://host1.no/client/clientarea.php?language=Norwegian",
    }

    constructor() {
        super(Host1NoCollector.CONFIG);
    }
}
