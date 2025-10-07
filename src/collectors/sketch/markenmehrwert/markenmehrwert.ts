
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarkenmehrwertCollector extends SketchCollector {

    static CONFIG = {
        id: "markenmehrwert",
        name: "Markenmehrwert",
        description: "i18n.collectors.markenmehrwert.description",
        version: "0",
        website: "https://www.markenmehrwert.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132110.jpg",
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
        entryUrl: "https://www.markenmehrwert.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarkenmehrwertCollector.CONFIG);
    }
}
