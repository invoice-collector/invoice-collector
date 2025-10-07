
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SostockedCollector extends SketchCollector {

    static CONFIG = {
        id: "sostocked",
        name: "SoStocked",
        description: "i18n.collectors.sostocked.description",
        version: "0",
        website: "https://app.sostocked.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899477.jpg",
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
        entryUrl: "https://app.sostocked.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SostockedCollector.CONFIG);
    }
}
