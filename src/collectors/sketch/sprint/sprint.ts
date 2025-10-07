
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SprintCollector extends SketchCollector {

    static CONFIG = {
        id: "sprint",
        name: "Sprint",
        description: "i18n.collectors.sprint.description",
        version: "0",
        website: "http://www.sprint.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8640.jpg",
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
        entryUrl: "http://www.sprint.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SprintCollector.CONFIG);
    }
}
