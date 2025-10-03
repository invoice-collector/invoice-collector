
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GokiGollnestAndKieselCollector extends SketchCollector {

    static CONFIG = {
        id: "goki_gollnest_and_kiesel",
        name: "goki - Gollnest & Kiesel",
        description: "i18n.collectors.goki_gollnest_and_kiesel.description",
        version: "0",
        website: "https://goki.eu/de/customerDocumentList-customerDocumentListId-invoice.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732083.jpg",
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
        entryUrl: "https://goki.eu/de/customerDocumentList-customerDocumentListId-invoice.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GokiGollnestAndKieselCollector.CONFIG);
    }
}
