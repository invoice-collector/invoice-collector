
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElwingCollector extends SketchCollector {

    static CONFIG = {
        id: "elwing",
        name: "Elwing",
        description: "i18n.collectors.elwing.description",
        version: "0",
        website: "https://books.zoho.eu/portal/elwingtech/index#/invoices?sort_order=D",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773805.jpg",
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
        entryUrl: "https://books.zoho.eu/portal/elwingtech/index#/invoices?sort_order=D",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElwingCollector.CONFIG);
    }
}
