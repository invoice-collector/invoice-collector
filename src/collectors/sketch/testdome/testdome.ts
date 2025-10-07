
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TestdomeCollector extends SketchCollector {

    static CONFIG = {
        id: "testdome",
        name: "TESTDOME",
        description: "i18n.collectors.testdome.description",
        version: "0",
        website: "https://app.testdome.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/922911.jpg",
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
        entryUrl: "https://app.testdome.com/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TestdomeCollector.CONFIG);
    }
}
