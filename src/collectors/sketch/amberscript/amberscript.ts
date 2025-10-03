
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmberscriptCollector extends SketchCollector {

    static CONFIG = {
        id: "amberscript",
        name: "Amberscript",
        description: "i18n.collectors.amberscript.description",
        version: "0",
        website: "https://app.amberscript.com/login?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899486.jpg",
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
        entryUrl: "https://app.amberscript.com/login?lang=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmberscriptCollector.CONFIG);
    }
}
