
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReamazeStaffLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "reamaze_staff_login",
        name: "reamaze - Staff Login",
        description: "i18n.collectors.reamaze_staff_login.description",
        version: "0",
        website: "https://www.reamaze.com/admin/settings/payment_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226693.jpg",
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
        entryUrl: "https://www.reamaze.com/admin/settings/payment_history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReamazeStaffLoginCollector.CONFIG);
    }
}
