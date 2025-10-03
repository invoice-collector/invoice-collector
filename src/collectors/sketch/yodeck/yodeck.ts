
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YodeckCollector extends SketchCollector {

    static CONFIG = {
        id: "yodeck",
        name: "Yodeck",
        description: "i18n.collectors.yodeck.description",
        version: "0",
        website: "https://app.yodeck.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553022.jpg",
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
        entryUrl: "https://app.yodeck.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YodeckCollector.CONFIG);
    }
}
