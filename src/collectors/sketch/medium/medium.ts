
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MediumCollector extends SketchCollector {

    static CONFIG = {
        id: "medium",
        name: "Medium",
        description: "i18n.collectors.medium.description",
        version: "0",
        website: "https://help.medium.com/hc/en-us/articles/360033412234-Getting-an-invoice-for-your-membership-subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/435455.jpg",
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
        entryUrl: "https://help.medium.com/hc/en-us/articles/360033412234-Getting-an-invoice-for-your-membership-subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediumCollector.CONFIG);
    }
}
