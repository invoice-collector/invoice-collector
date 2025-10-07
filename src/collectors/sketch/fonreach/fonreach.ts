
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FonreachCollector extends SketchCollector {

    static CONFIG = {
        id: "fonreach",
        name: "Fonreach",
        description: "i18n.collectors.fonreach.description",
        version: "0",
        website: "http://www.fonreach.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22490.jpg",
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
        entryUrl: "http://www.fonreach.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FonreachCollector.CONFIG);
    }
}
