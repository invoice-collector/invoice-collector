
import { SketchCollector } from '../../sketchCollector';

export class CollectCollector extends SketchCollector {

    static CONFIG = {
        id: "collect",
        name: "COLLECT",
        description: "i18n.collectors.collect.description",
        version: "0",
        website: "https://app.usecollect.com/settings/plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128538.jpg",
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
        entryUrl: "https://app.usecollect.com/settings/plan",
    }

    constructor() {
        super(CollectCollector.CONFIG);
    }
}
