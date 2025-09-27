
import { SketchCollector } from '../../sketchCollector';

export class Cable4Collector extends SketchCollector {

    static CONFIG = {
        id: "cable4",
        name: "Cable4",
        description: "i18n.collectors.cable4.description",
        version: "0",
        website: "https://kdportal.cable4.de/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1818969.jpg",
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
        entryUrl: "https://kdportal.cable4.de/rechnungen",
    }

    constructor() {
        super(Cable4Collector.CONFIG);
    }
}
