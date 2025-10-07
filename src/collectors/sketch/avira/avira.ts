
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AviraCollector extends SketchCollector {

    static CONFIG = {
        id: "avira",
        name: "Avira",
        description: "i18n.collectors.avira.description",
        version: "0",
        website: "https://my.avira.com/de/dashboard/subscriptions/tabs/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3177.jpg",
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
        entryUrl: "https://my.avira.com/de/dashboard/subscriptions/tabs/plans",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AviraCollector.CONFIG);
    }
}
