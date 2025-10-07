
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HellohqCollector extends SketchCollector {

    static CONFIG = {
        id: "hellohq",
        name: "HelloHQ",
        description: "i18n.collectors.hellohq.description",
        version: "0",
        website: "https://hq.hellohq.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428102.jpg",
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
        entryUrl: "https://hq.hellohq.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HellohqCollector.CONFIG);
    }
}
