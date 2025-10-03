
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoxCollector extends SketchCollector {

    static CONFIG = {
        id: "cox",
        name: "Cox",
        description: "i18n.collectors.cox.description",
        version: "0",
        website: "http://www.cox.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8837.jpg",
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
        entryUrl: "http://www.cox.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoxCollector.CONFIG);
    }
}
