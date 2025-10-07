
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CleafinCleanConceptCollector extends SketchCollector {

    static CONFIG = {
        id: "cleafin_clean_concept",
        name: "Cleafin CLEAN CONCEPT",
        description: "i18n.collectors.cleafin_clean_concept.description",
        version: "0",
        website: "https://cleafin.shop/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940356.jpg",
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
        entryUrl: "https://cleafin.shop/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CleafinCleanConceptCollector.CONFIG);
    }
}
