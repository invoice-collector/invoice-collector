
import { SketchCollector } from '../../sketchCollector';

export class WhenIWorkCollector extends SketchCollector {

    static CONFIG = {
        id: "when_i_work",
        name: "When I Work",
        description: "i18n.collectors.when_i_work.description",
        version: "0",
        website: "https://app.wheniwork.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22900.jpg",
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
        entryUrl: "https://app.wheniwork.com/account",
    }

    constructor() {
        super(WhenIWorkCollector.CONFIG);
    }
}
