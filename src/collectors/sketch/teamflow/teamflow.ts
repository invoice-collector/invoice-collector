
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeamflowCollector extends SketchCollector {

    static CONFIG = {
        id: "teamflow",
        name: "Teamflow",
        description: "i18n.collectors.teamflow.description",
        version: "0",
        website: "https://app.teamflowhq.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/922879.jpg",
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
        entryUrl: "https://app.teamflowhq.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeamflowCollector.CONFIG);
    }
}
