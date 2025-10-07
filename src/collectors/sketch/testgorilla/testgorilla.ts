
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TestgorillaCollector extends SketchCollector {

    static CONFIG = {
        id: "testgorilla",
        name: "Testgorilla",
        description: "i18n.collectors.testgorilla.description",
        version: "0",
        website: "https://app.testgorilla.com/profile/plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387444.jpg",
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
        entryUrl: "https://app.testgorilla.com/profile/plan",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TestgorillaCollector.CONFIG);
    }
}
