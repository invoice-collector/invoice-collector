
import { SketchCollector } from '../../sketchCollector';

export class InsightAtCollector extends SketchCollector {

    static CONFIG = {
        id: "insight_at",
        name: "Insight(at)",
        description: "i18n.collectors.insight_at.description",
        version: "0",
        website: "https://at.insight.com/de/apps/account/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396901.jpg",
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
        entryUrl: "https://at.insight.com/de/apps/account/invoices.php",
    }

    constructor() {
        super(InsightAtCollector.CONFIG);
    }
}
