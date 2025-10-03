
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LibsynCollector extends SketchCollector {

    static CONFIG = {
        id: "libsyn",
        name: "libsyn",
        description: "i18n.collectors.libsyn.description",
        version: "0",
        website: "https://four.libsyn.com/billing/billing-form/type/change-plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20876.jpg",
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
        entryUrl: "https://four.libsyn.com/billing/billing-form/type/change-plan",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LibsynCollector.CONFIG);
    }
}
