
import { SketchCollector } from '../../sketchCollector';

export class WhosoffCollector extends SketchCollector {

    static CONFIG = {
        id: "whosoff",
        name: "WhosOff",
        description: "i18n.collectors.whosoff.description",
        version: "0",
        website: "https://staff.whosoff.com/login/?Redirect=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24906.jpg",
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
        entryUrl: "https://staff.whosoff.com/login/?Redirect=/",
    }

    constructor() {
        super(WhosoffCollector.CONFIG);
    }
}
