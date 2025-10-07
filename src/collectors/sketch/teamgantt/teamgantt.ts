
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeamganttCollector extends SketchCollector {

    static CONFIG = {
        id: "teamgantt",
        name: "teamgantt",
        description: "i18n.collectors.teamgantt.description",
        version: "0",
        website: "https://app.teamgantt.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10775.jpg",
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
        entryUrl: "https://app.teamgantt.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeamganttCollector.CONFIG);
    }
}
