
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ApmCollector extends SketchCollector {

    static CONFIG = {
        id: "apm",
        name: "APM",
        description: "i18n.collectors.apm.description",
        version: "0",
        website: "https://buergerportal.apm-niemegk.de/objects/96661/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213304.jpg",
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
        loginUrl: "https://buergerportal.apm-niemegk.de/objects/96661/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ApmCollector.CONFIG);
    }
}
