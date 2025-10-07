
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WorkinnCollector extends SketchCollector {

    static CONFIG = {
        id: "workinn",
        name: "Workinn",
        description: "i18n.collectors.workinn.description",
        version: "0",
        website: "https://work-inn.officernd.com/billing/invoices/company?start=2023-01-31T23:00:00.000Z&end=2023-04-30T21:59:59.999Z",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862678.jpg",
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
        entryUrl: "https://work-inn.officernd.com/billing/invoices/company?start=2023-01-31T23:00:00.000Z&end=2023-04-30T21:59:59.999Z",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WorkinnCollector.CONFIG);
    }
}
