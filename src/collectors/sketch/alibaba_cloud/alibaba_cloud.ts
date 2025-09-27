
import { SketchCollector } from '../../sketchCollector';

export class AlibabaCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "alibaba_cloud",
        name: "Alibaba Cloud",
        description: "i18n.collectors.alibaba_cloud.description",
        version: "0",
        website: "https://account.alibabacloud.com/login/login.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72316.jpg",
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
        entryUrl: "https://account.alibabacloud.com/login/login.htm",
    }

    constructor() {
        super(AlibabaCloudCollector.CONFIG);
    }
}
