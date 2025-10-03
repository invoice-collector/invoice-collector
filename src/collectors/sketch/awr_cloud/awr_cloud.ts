
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AwrCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "awr_cloud",
        name: "AWR Cloud",
        description: "i18n.collectors.awr_cloud.description",
        version: "0",
        website: "https://www.awrcloud.com/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73225.jpg",
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
        entryUrl: "https://www.awrcloud.com/invoices.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AwrCloudCollector.CONFIG);
    }
}
