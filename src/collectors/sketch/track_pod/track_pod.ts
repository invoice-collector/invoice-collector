
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrackPodCollector extends SketchCollector {

    static CONFIG = {
        id: "track_pod",
        name: "Track-POD",
        description: "i18n.collectors.track_pod.description",
        version: "0",
        website: "https://identity.track-pod.com/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2510446.jpg",
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
        entryUrl: "https://identity.track-pod.com/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrackPodCollector.CONFIG);
    }
}
