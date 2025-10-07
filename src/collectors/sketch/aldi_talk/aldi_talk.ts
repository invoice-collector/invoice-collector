
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AldiTalkCollector extends SketchCollector {

    static CONFIG = {
        id: "aldi_talk",
        name: "ALDI TALK",
        description: "i18n.collectors.aldi_talk.description",
        version: "0",
        website: "https://www.alditalk-kundenbetreuung.de/de/konto/kontouebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9011.jpg",
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
        entryUrl: "https://www.alditalk-kundenbetreuung.de/de/konto/kontouebersicht",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AldiTalkCollector.CONFIG);
    }
}
