
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CreatespaceCollector extends SketchCollector {

    static CONFIG = {
        id: "createspace",
        name: "CreateSpace",
        description: "i18n.collectors.createspace.description",
        version: "0",
        website: "https://www.createspace.com/Customer/Account.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7992.jpg",
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
        entryUrl: "https://www.createspace.com/Customer/Account.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CreatespaceCollector.CONFIG);
    }
}
