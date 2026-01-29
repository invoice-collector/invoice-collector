
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StudentjobCollector extends SketchCollector {

    static CONFIG = {
        id: "studentjob",
        name: "Studentjob",
        description: "i18n.collectors.studentjob.description",
        version: "0",
        website: "https://www.studentjob.de/betreff/orders?q%5Bindex_selection%5D=paid_with_invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777341.jpg",
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
        loginUrl: "https://www.studentjob.de/betreff/orders?q%5Bindex_selection%5D=paid_with_invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StudentjobCollector.CONFIG);
    }
}
