
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyhammerCollector extends SketchCollector {

    static CONFIG = {
        id: "myhammer",
        name: "MyHammer",
        description: "i18n.collectors.myhammer.description",
        version: "0",
        website: "https://www.my-hammer.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/816589.jpg",
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
        entryUrl: "https://www.my-hammer.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyhammerCollector.CONFIG);
    }
}
