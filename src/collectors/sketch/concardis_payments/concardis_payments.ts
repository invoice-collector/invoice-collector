
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConcardisPaymentsCollector extends SketchCollector {

    static CONFIG = {
        id: "concardis_payments",
        name: "Concardis Payments",
        description: "i18n.collectors.concardis_payments.description",
        version: "0",
        website: "https://my.concardis.com/api/api/generated-file/4e897141-ec39-4996-1f80-08db8f0e611b",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063515.jpg",
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
        loginUrl: "https://my.concardis.com/api/api/generated-file/4e897141-ec39-4996-1f80-08db8f0e611b",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ConcardisPaymentsCollector.CONFIG);
    }
}
