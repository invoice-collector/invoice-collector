
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SedomicilierCollector extends SketchCollector {

    static CONFIG = {
        id: "sedomicilier",
        name: "SeDomicilier",
        description: "i18n.collectors.sedomicilier.description",
        version: "0",
        website: "https://espace-client.sedomicilier.fr/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/505992.jpg",
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
        entryUrl: "https://espace-client.sedomicilier.fr/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SedomicilierCollector.CONFIG);
    }
}
