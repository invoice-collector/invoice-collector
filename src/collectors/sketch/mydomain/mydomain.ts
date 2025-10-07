
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MydomainCollector extends SketchCollector {

    static CONFIG = {
        id: "mydomain",
        name: "Mydomain",
        description: "i18n.collectors.mydomain.description",
        version: "0",
        website: "https://www1.mydomain.com/secure/login.bml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153572.jpg",
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
        entryUrl: "https://www1.mydomain.com/secure/login.bml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MydomainCollector.CONFIG);
    }
}
