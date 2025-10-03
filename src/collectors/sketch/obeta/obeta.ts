
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ObetaCollector extends SketchCollector {

    static CONFIG = {
        id: "obeta",
        name: "OBETA",
        description: "i18n.collectors.obeta.description",
        version: "0",
        website: "http://www.obeta.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116511.jpg",
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
        entryUrl: "http://www.obeta.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ObetaCollector.CONFIG);
    }
}
