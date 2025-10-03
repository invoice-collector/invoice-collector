
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ComviqCollector extends SketchCollector {

    static CONFIG = {
        id: "comviq",
        name: "Comviq",
        description: "i18n.collectors.comviq.description",
        version: "0",
        website: "https://www.comviq.se/mitt-konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/143861.jpg",
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
        entryUrl: "https://www.comviq.se/mitt-konto",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ComviqCollector.CONFIG);
    }
}
