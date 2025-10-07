
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdexiaCollector extends SketchCollector {

    static CONFIG = {
        id: "adexia",
        name: "Adexia",
        description: "i18n.collectors.adexia.description",
        version: "0",
        website: "https://client.groupe-adexia.com/isuiteexpert/pages/iged/iged.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770478.jpg",
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
        entryUrl: "https://client.groupe-adexia.com/isuiteexpert/pages/iged/iged.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdexiaCollector.CONFIG);
    }
}
