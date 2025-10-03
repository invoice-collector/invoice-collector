
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SymboxCollector extends SketchCollector {

    static CONFIG = {
        id: "symbox",
        name: "Symbox",
        description: "i18n.collectors.symbox.description",
        version: "0",
        website: "http://www.symbox.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9162.jpg",
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
        entryUrl: "http://www.symbox.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SymboxCollector.CONFIG);
    }
}
