
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JournalHauteMarneCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_haute_marne",
        name: "Journal haute marne",
        description: "i18n.collectors.journal_haute_marne.description",
        version: "0",
        website: "https://jhm.fr/mon-compte/mes-abonnements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468263.jpg",
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
        loginUrl: "https://jhm.fr/mon-compte/mes-abonnements/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JournalHauteMarneCollector.CONFIG);
    }
}
