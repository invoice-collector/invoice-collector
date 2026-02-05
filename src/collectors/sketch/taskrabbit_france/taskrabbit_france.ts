
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TaskrabbitFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "taskrabbit_france",
        name: "Taskrabbit France",
        description: "i18n.collectors.taskrabbit_france.description",
        version: "0",
        website: "https://www.taskrabbit.fr/dashboard/completed",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2656473.jpg",
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
        loginUrl: "https://www.taskrabbit.fr/dashboard/completed",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TaskrabbitFranceCollector.CONFIG);
    }
}
