
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MybglCollector extends SketchCollector {

    static CONFIG = {
        id: "mybgl",
        name: "MyBGL",
        description: "i18n.collectors.mybgl.description",
        version: "0",
        website: "https://www.mybgl.com.au/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4561968.jpg",
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
        entryUrl: "https://www.mybgl.com.au/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MybglCollector.CONFIG);
    }
}
