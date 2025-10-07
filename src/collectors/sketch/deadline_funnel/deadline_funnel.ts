
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeadlineFunnelCollector extends SketchCollector {

    static CONFIG = {
        id: "deadline_funnel",
        name: "Deadline Funnel",
        description: "i18n.collectors.deadline_funnel.description",
        version: "0",
        website: "https://deadlinefunnel.com/auth/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23540.jpg",
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
        entryUrl: "https://deadlinefunnel.com/auth/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeadlineFunnelCollector.CONFIG);
    }
}
