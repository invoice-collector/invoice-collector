
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RowsComCollector extends SketchCollector {

    static CONFIG = {
        id: "rows_com",
        name: "rows.com",
        description: "i18n.collectors.rows_com.description",
        version: "0",
        website: "https://rows.com/vegconomist/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1323324.jpg",
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
        entryUrl: "https://rows.com/vegconomist/settings/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RowsComCollector.CONFIG);
    }
}
