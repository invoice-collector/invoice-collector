
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GraphicallyIoCollector extends SketchCollector {

    static CONFIG = {
        id: "graphically_io",
        name: "Graphically.io",
        description: "i18n.collectors.graphically_io.description",
        version: "0",
        website: "https://clients.graphically.io/portal/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747692.jpg",
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
        entryUrl: "https://clients.graphically.io/portal/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GraphicallyIoCollector.CONFIG);
    }
}
