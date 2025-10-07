
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Flowwer2Collector extends SketchCollector {

    static CONFIG = {
        id: "flowwer2",
        name: "Flowwer2",
        description: "i18n.collectors.flowwer2.description",
        version: "0",
        website: "https://www.flowwer2.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172784.jpg",
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
        entryUrl: "https://www.flowwer2.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Flowwer2Collector.CONFIG);
    }
}
