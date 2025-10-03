
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SaasyncCollector extends SketchCollector {

    static CONFIG = {
        id: "saasync",
        name: "SaaSync",
        description: "i18n.collectors.saasync.description",
        version: "0",
        website: "https://www.saasync.com/a/settings/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1360000.jpg",
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
        entryUrl: "https://www.saasync.com/a/settings/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SaasyncCollector.CONFIG);
    }
}
