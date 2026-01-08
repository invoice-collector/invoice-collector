
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OldenburgischeLandesbankCollector extends SketchCollector {

    static CONFIG = {
        id: "oldenburgische_landesbank",
        name: "Oldenburgische Landesbank",
        description: "i18n.collectors.oldenburgische_landesbank.description",
        version: "0",
        website: "https://hbciweb.olb.de/financebrowser5/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96004.jpg",
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
        loginUrl: "https://hbciweb.olb.de/financebrowser5/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OldenburgischeLandesbankCollector.CONFIG);
    }
}
