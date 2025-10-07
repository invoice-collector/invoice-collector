
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "easyspace",
        name: "Easyspace",
        description: "i18n.collectors.easyspace.description",
        version: "0",
        website: "http://www.easyspace.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8873.jpg",
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
        entryUrl: "http://www.easyspace.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyspaceCollector.CONFIG);
    }
}
