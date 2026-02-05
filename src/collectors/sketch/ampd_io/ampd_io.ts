
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmpdIoCollector extends SketchCollector {

    static CONFIG = {
        id: "ampd_io",
        name: "ampd.io",
        description: "i18n.collectors.ampd_io.description",
        version: "0",
        website: "https://app.ampd.io/t/druckerpatronenexpress-j6pq1034nj-web/dashboard/assessment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1364623.jpg",
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
        loginUrl: "https://app.ampd.io/t/druckerpatronenexpress-j6pq1034nj-web/dashboard/assessment",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmpdIoCollector.CONFIG);
    }
}
