
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebexTeamsCollector extends SketchCollector {

    static CONFIG = {
        id: "webex_teams",
        name: "WebEx Teams",
        description: "i18n.collectors.webex_teams.description",
        version: "0",
        website: "https://admin.webex.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118478.jpg",
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
        entryUrl: "https://admin.webex.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebexTeamsCollector.CONFIG);
    }
}
