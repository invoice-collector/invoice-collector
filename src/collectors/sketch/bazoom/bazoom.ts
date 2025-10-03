
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BazoomCollector extends SketchCollector {

    static CONFIG = {
        id: "bazoom",
        name: "Bazoom",
        description: "i18n.collectors.bazoom.description",
        version: "0",
        website: "https://app.bazoom.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083433.jpg",
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
        entryUrl: "https://app.bazoom.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BazoomCollector.CONFIG);
    }
}
