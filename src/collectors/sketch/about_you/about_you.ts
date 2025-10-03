
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AboutYouCollector extends SketchCollector {

    static CONFIG = {
        id: "about_you",
        name: "ABOUT YOU",
        description: "i18n.collectors.about_you.description",
        version: "0",
        website: "https://www.aboutyou.de/a/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8605.jpg",
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
        entryUrl: "https://www.aboutyou.de/a/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AboutYouCollector.CONFIG);
    }
}
