
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeaverBuilderCollector extends SketchCollector {

    static CONFIG = {
        id: "beaver_builder",
        name: "Beaver Builder",
        description: "i18n.collectors.beaver_builder.description",
        version: "0",
        website: "https://www.wpbeaverbuilder.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50382.jpg",
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
        entryUrl: "https://www.wpbeaverbuilder.com/my-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeaverBuilderCollector.CONFIG);
    }
}
