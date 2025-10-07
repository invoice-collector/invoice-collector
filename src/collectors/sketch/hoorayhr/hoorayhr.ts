
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HoorayhrCollector extends SketchCollector {

    static CONFIG = {
        id: "hoorayhr",
        name: "HoorayHR",
        description: "i18n.collectors.hoorayhr.description",
        version: "0",
        website: "https://app.hoorayhr.io/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4365466.jpg",
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
        entryUrl: "https://app.hoorayhr.io/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HoorayhrCollector.CONFIG);
    }
}
