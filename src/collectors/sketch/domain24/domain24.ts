
import { SketchCollector } from '../../sketchCollector';

export class Domain24Collector extends SketchCollector {

    static CONFIG = {
        id: "domain24",
        name: "Domain24",
        description: "i18n.collectors.domain24.description",
        version: "0",
        website: "http://www.domain24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45392.jpg",
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
        entryUrl: "http://www.domain24.de",
    }

    constructor() {
        super(Domain24Collector.CONFIG);
    }
}
