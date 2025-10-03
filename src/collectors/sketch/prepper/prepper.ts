
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrepperCollector extends SketchCollector {

    static CONFIG = {
        id: "prepper",
        name: "Prepper",
        description: "i18n.collectors.prepper.description",
        version: "0",
        website: "https://preppr.com/app/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202497.jpg",
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
        entryUrl: "https://preppr.com/app/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrepperCollector.CONFIG);
    }
}
