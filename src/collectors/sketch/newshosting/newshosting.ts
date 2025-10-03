
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NewshostingCollector extends SketchCollector {

    static CONFIG = {
        id: "newshosting",
        name: "Newshosting",
        description: "i18n.collectors.newshosting.description",
        version: "0",
        website: "https://controlpanel.newshosting.com/customer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52188.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://controlpanel.newshosting.com/customer/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NewshostingCollector.CONFIG);
    }
}
