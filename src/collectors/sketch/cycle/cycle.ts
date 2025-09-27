
import { SketchCollector } from '../../sketchCollector';

export class CycleCollector extends SketchCollector {

    static CONFIG = {
        id: "cycle",
        name: "Cycle",
        description: "i18n.collectors.cycle.description",
        version: "0",
        website: "https://erp.app-room.de/org/office/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1322310.jpg",
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
        entryUrl: "https://erp.app-room.de/org/office/rechnungen",
    }

    constructor() {
        super(CycleCollector.CONFIG);
    }
}
