
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CitizCollector extends SketchCollector {

    static CONFIG = {
        id: "citiz",
        name: "Citiz",
        description: "i18n.collectors.citiz.description",
        version: "0",
        website: "https://service.citiz.fr/webapp/my_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654757.jpg",
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
        entryUrl: "https://service.citiz.fr/webapp/my_invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CitizCollector.CONFIG);
    }
}
