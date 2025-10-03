
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeamweekCollector extends SketchCollector {

    static CONFIG = {
        id: "teamweek",
        name: "Teamweek",
        description: "i18n.collectors.teamweek.description",
        version: "0",
        website: "https://plan.toggl.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6424.jpg",
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
        entryUrl: "https://plan.toggl.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeamweekCollector.CONFIG);
    }
}
