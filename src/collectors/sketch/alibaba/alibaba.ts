
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlibabaCollector extends SketchCollector {

    static CONFIG = {
        id: "alibaba",
        name: "Alibaba",
        description: "i18n.collectors.alibaba.description",
        version: "0",
        website: "https://biz.alibaba.com/order/list.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110069.jpg",
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
        entryUrl: "https://biz.alibaba.com/order/list.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlibabaCollector.CONFIG);
    }
}
