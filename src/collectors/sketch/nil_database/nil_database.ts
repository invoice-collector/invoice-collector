
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NilDatabaseCollector extends SketchCollector {

    static CONFIG = {
        id: "nil_database",
        name: "Nil Database",
        description: "i18n.collectors.nil_database.description",
        version: "0",
        website: "https://nilmanager.nil-database.com/accounts/login/?next=/accounts/launchpad/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2161968.jpg",
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
        loginUrl: "https://nilmanager.nil-database.com/accounts/login/?next=/accounts/launchpad/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NilDatabaseCollector.CONFIG);
    }
}
