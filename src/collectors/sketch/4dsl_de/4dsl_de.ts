
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _4dslDeCollector extends SketchCollector {

    static CONFIG = {
        id: "4dsl_de",
        name: "4DSL.de",
        description: "i18n.collectors.4dsl_de.description",
        version: "0",
        website: "http://www.4dsl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9003.jpg",
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
        entryUrl: "http://www.4dsl.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_4dslDeCollector.CONFIG);
    }
}
