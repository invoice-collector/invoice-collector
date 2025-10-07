
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyminifactoryCollector extends SketchCollector {

    static CONFIG = {
        id: "myminifactory",
        name: "MyMinifactory",
        description: "i18n.collectors.myminifactory.description",
        version: "0",
        website: "https://www.myminifactory.com/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1876277.jpg",
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
        entryUrl: "https://www.myminifactory.com/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyminifactoryCollector.CONFIG);
    }
}
