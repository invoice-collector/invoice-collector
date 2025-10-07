
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ClickceaseCollector extends SketchCollector {

    static CONFIG = {
        id: "clickcease",
        name: "ClickCease",
        description: "i18n.collectors.clickcease.description",
        version: "0",
        website: "https://www.clickcease.com/dashboard/#/account/domains",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120874.jpg",
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
        entryUrl: "https://www.clickcease.com/dashboard/#/account/domains",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClickceaseCollector.CONFIG);
    }
}
