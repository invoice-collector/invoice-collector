
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebsitebutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "websitebutler",
        name: "Websitebutler",
        description: "i18n.collectors.websitebutler.description",
        version: "0",
        website: "https://my.websitebutler.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30044.jpg",
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
        entryUrl: "https://my.websitebutler.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebsitebutlerCollector.CONFIG);
    }
}
