
import { SketchCollector } from '../../sketchCollector';

export class OracleCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "oracle_cloud",
        name: "Oracle Cloud",
        description: "i18n.collectors.oracle_cloud.description",
        version: "0",
        website: "https://cloud.oracle.com/account-management/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779842.jpg",
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
        entryUrl: "https://cloud.oracle.com/account-management/invoices",
    }

    constructor() {
        super(OracleCloudCollector.CONFIG);
    }
}
