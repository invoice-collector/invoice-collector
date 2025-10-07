
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PostscanmailCollector extends SketchCollector {

    static CONFIG = {
        id: "postscanmail",
        name: "PostScanMail",
        description: "i18n.collectors.postscanmail.description",
        version: "0",
        website: "https://app.postscanmail.com/settings/billing-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/572699.jpg",
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
        entryUrl: "https://app.postscanmail.com/settings/billing-statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PostscanmailCollector.CONFIG);
    }
}
