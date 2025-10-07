
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DouglasCollector extends SketchCollector {

    static CONFIG = {
        id: "douglas",
        name: "Douglas",
        description: "i18n.collectors.douglas.description",
        version: "0",
        website: "https://pvn.douglas.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10490.jpg",
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
        entryUrl: "https://pvn.douglas.de/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DouglasCollector.CONFIG);
    }
}
