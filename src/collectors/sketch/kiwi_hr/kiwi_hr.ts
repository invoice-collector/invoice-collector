
import { SketchCollector } from '../../sketchCollector';

export class KiwiHrCollector extends SketchCollector {

    static CONFIG = {
        id: "kiwi_hr",
        name: "KIWI HR",
        description: "i18n.collectors.kiwi_hr.description",
        version: "0",
        website: "https://billing.stripe.com/session/live_YWNjdF8xRDlUVWdEZ3hvdmVpQUp1LF9McnpQODdZS3FGeExEMGk2dHFSa2NnTlJTSFNCempt01008ksIAlnO",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282441.jpg",
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
        entryUrl: "https://billing.stripe.com/session/live_YWNjdF8xRDlUVWdEZ3hvdmVpQUp1LF9McnpQODdZS3FGeExEMGk2dHFSa2NnTlJTSFNCempt01008ksIAlnO",
    }

    constructor() {
        super(KiwiHrCollector.CONFIG);
    }
}
