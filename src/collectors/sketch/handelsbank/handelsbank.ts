
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandelsbankCollector extends SketchCollector {

    static CONFIG = {
        id: "handelsbank",
        name: "Handelsbank",
        description: "i18n.collectors.handelsbank.description",
        version: "0",
        website: "https://banking.handelsbank.com/print/inbox.document.php?fileid=OTY4Mjg3&reloadid=N21zYXNxY3BndWJkZXEzcmpkODJ0a3A0cDd8fHw1NjY1ZDUyNjU3NTI5YTcyNjk5NmJmMmJkYTZjZjM3MXx8fDc4MDQ0NDc0OTA%3D",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138771.jpg",
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
        loginUrl: "https://banking.handelsbank.com/print/inbox.document.php?fileid=OTY4Mjg3&reloadid=N21zYXNxY3BndWJkZXEzcmpkODJ0a3A0cDd8fHw1NjY1ZDUyNjU3NTI5YTcyNjk5NmJmMmJkYTZjZjM3MXx8fDc4MDQ0NDc0OTA%3D",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HandelsbankCollector.CONFIG);
    }
}
