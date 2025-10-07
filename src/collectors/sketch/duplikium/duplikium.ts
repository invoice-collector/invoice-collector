
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DuplikiumCollector extends SketchCollector {

    static CONFIG = {
        id: "duplikium",
        name: "Duplikium",
        description: "i18n.collectors.duplikium.description",
        version: "0",
        website: "https://www.trade-copier.com/index.php/myaccount/subscription/8O56WJCI0191",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211136.jpg",
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
        entryUrl: "https://www.trade-copier.com/index.php/myaccount/subscription/8O56WJCI0191",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DuplikiumCollector.CONFIG);
    }
}
