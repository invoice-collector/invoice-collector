
import { SketchCollector } from '../../sketchCollector';

export class BugfenderCollector extends SketchCollector {

    static CONFIG = {
        id: "bugfender",
        name: "bugfender",
        description: "i18n.collectors.bugfender.description",
        version: "0",
        website: "https://bugfender.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132277.jpg",
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
        entryUrl: "https://bugfender.com",
    }

    constructor() {
        super(BugfenderCollector.CONFIG);
    }
}
