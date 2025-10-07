
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BugsnagCollector extends SketchCollector {

    static CONFIG = {
        id: "bugsnag",
        name: "bugsnag",
        description: "i18n.collectors.bugsnag.description",
        version: "0",
        website: "https://app.bugsnag.com/settings/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10294.jpg",
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
        entryUrl: "https://app.bugsnag.com/settings/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BugsnagCollector.CONFIG);
    }
}
