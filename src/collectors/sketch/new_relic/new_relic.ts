
import { SketchCollector } from '../../sketchCollector';

export class NewRelicCollector extends SketchCollector {

    static CONFIG = {
        id: "new_relic",
        name: "New Relic",
        description: "i18n.collectors.new_relic.description",
        version: "0",
        website: "https://www.newrelic.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9039.jpg",
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
        entryUrl: "https://www.newrelic.com",
    }

    constructor() {
        super(NewRelicCollector.CONFIG);
    }
}
