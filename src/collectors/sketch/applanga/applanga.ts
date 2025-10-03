
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApplangaCollector extends SketchCollector {

    static CONFIG = {
        id: "applanga",
        name: "Applanga",
        description: "i18n.collectors.applanga.description",
        version: "0",
        website: "https://dashboard.applanga.com/#!/billings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111681.jpg",
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
        entryUrl: "https://dashboard.applanga.com/#!/billings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApplangaCollector.CONFIG);
    }
}
