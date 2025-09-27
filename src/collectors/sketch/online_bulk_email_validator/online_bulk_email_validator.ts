
import { SketchCollector } from '../../sketchCollector';

export class OnlineBulkEmailValidatorCollector extends SketchCollector {

    static CONFIG = {
        id: "online_bulk_email_validator",
        name: "Online Bulk Email Validator",
        description: "i18n.collectors.online_bulk_email_validator.description",
        version: "0",
        website: "https://panel.bulkemailchecker.com/account-settings/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206921.jpg",
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
        entryUrl: "https://panel.bulkemailchecker.com/account-settings/",
    }

    constructor() {
        super(OnlineBulkEmailValidatorCollector.CONFIG);
    }
}
