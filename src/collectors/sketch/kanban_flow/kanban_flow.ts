
import { SketchCollector } from '../../sketchCollector';

export class KanbanFlowCollector extends SketchCollector {

    static CONFIG = {
        id: "kanban_flow",
        name: "Kanban Flow",
        description: "i18n.collectors.kanban_flow.description",
        version: "0",
        website: "https://kanbanflow.com/organization/moHZ7G/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310354.jpg",
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
        entryUrl: "https://kanbanflow.com/organization/moHZ7G/settings/invoices",
    }

    constructor() {
        super(KanbanFlowCollector.CONFIG);
    }
}
