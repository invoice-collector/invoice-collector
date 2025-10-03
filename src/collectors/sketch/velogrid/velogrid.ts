
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VelogridCollector extends SketchCollector {

    static CONFIG = {
        id: "velogrid",
        name: "Velogrid",
        description: "i18n.collectors.velogrid.description",
        version: "0",
        website: "https://secure.velogrid.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47313.jpg",
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
        entryUrl: "https://secure.velogrid.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VelogridCollector.CONFIG);
    }
}
