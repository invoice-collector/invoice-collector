
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class XadapterCollector extends SketchCollector {

    static CONFIG = {
        id: "xadapter",
        name: "XAdapter",
        description: "i18n.collectors.xadapter.description",
        version: "0",
        website: "https://www.xadapter.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32764.jpg",
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
        entryUrl: "https://www.xadapter.com/my-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XadapterCollector.CONFIG);
    }
}
