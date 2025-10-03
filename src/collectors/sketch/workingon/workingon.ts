
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WorkingonCollector extends SketchCollector {

    static CONFIG = {
        id: "workingon",
        name: "WorkingOn",
        description: "i18n.collectors.workingon.description",
        version: "0",
        website: "https://www.workingon.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8526.jpg",
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
        entryUrl: "https://www.workingon.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WorkingonCollector.CONFIG);
    }
}
