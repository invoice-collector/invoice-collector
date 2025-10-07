
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyusCollector extends SketchCollector {

    static CONFIG = {
        id: "myus",
        name: "myus",
        description: "i18n.collectors.myus.description",
        version: "0",
        website: "https://myaccount.myus.com/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132484.jpg",
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
        entryUrl: "https://myaccount.myus.com/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyusCollector.CONFIG);
    }
}
