
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RemoteInterviewCollector extends SketchCollector {

    static CONFIG = {
        id: "remote_interview",
        name: "Remote Interview",
        description: "i18n.collectors.remote_interview.description",
        version: "0",
        website: "https://app.remoteinterview.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/519771.jpg",
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
        entryUrl: "https://app.remoteinterview.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RemoteInterviewCollector.CONFIG);
    }
}
