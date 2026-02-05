
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WallStreetJournalCollector extends SketchCollector {

    static CONFIG = {
        id: "wall_street_journal",
        name: "Wall Street Journal",
        description: "i18n.collectors.wall_street_journal.description",
        version: "0",
        website: "https://www.wsj.com/client/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16200.jpg",
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
        loginUrl: "https://www.wsj.com/client/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WallStreetJournalCollector.CONFIG);
    }
}
