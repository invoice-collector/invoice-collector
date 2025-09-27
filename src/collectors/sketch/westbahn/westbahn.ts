
import { SketchCollector } from '../../sketchCollector';

export class WestbahnCollector extends SketchCollector {

    static CONFIG = {
        id: "westbahn",
        name: "WESTbahn",
        description: "i18n.collectors.westbahn.description",
        version: "0",
        website: "http://www.westbahn.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52870.jpg",
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
        entryUrl: "http://www.westbahn.at",
    }

    constructor() {
        super(WestbahnCollector.CONFIG);
    }
}
