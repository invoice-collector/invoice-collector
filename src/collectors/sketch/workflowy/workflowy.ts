
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WorkflowyCollector extends SketchCollector {

    static CONFIG = {
        id: "workflowy",
        name: "WorkFlowy",
        description: "i18n.collectors.workflowy.description",
        version: "0",
        website: "https://workflowy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522640.jpg",
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
        entryUrl: "https://workflowy.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WorkflowyCollector.CONFIG);
    }
}
