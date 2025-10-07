
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TencentCollector extends SketchCollector {

    static CONFIG = {
        id: "tencent",
        name: "Tencent",
        description: "i18n.collectors.tencent.description",
        version: "0",
        website: "https://console.tencentcloud.com/expense/invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4368505.jpg",
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
        entryUrl: "https://console.tencentcloud.com/expense/invoicing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TencentCollector.CONFIG);
    }
}
