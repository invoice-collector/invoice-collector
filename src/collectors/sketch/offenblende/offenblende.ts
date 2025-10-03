
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OffenblendeCollector extends SketchCollector {

    static CONFIG = {
        id: "offenblende",
        name: "offenblende",
        description: "i18n.collectors.offenblende.description",
        version: "0",
        website: "http://portal.offenblende.de/app/contacts/tasks_billing.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134580.jpg",
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
        entryUrl: "http://portal.offenblende.de/app/contacts/tasks_billing.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OffenblendeCollector.CONFIG);
    }
}
