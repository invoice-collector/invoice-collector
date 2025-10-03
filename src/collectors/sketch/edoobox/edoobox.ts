
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdooboxCollector extends SketchCollector {

    static CONFIG = {
        id: "edoobox",
        name: "edoobox",
        description: "i18n.collectors.edoobox.description",
        version: "0",
        website: "https://app1.edoobox.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39689.jpg",
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
        entryUrl: "https://app1.edoobox.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdooboxCollector.CONFIG);
    }
}
