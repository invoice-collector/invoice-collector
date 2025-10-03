
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OptilioCollector extends SketchCollector {

    static CONFIG = {
        id: "optilio",
        name: "OPTILIO",
        description: "i18n.collectors.optilio.description",
        version: "0",
        website: "https://app.optillio.com/#/page/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061830.jpg",
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
        entryUrl: "https://app.optillio.com/#/page/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OptilioCollector.CONFIG);
    }
}
