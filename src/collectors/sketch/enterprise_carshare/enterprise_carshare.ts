
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnterpriseCarshareCollector extends SketchCollector {

    static CONFIG = {
        id: "enterprise_carshare",
        name: "Enterprise Carshare",
        description: "i18n.collectors.enterprise_carshare.description",
        version: "0",
        website: "https://www.enterprisecarshare.com/us/en/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9205.jpg",
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
        entryUrl: "https://www.enterprisecarshare.com/us/en/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnterpriseCarshareCollector.CONFIG);
    }
}
