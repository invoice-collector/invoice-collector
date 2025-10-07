
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlinejobsPhCollector extends SketchCollector {

    static CONFIG = {
        id: "onlinejobs_ph",
        name: "OnlineJobs.ph",
        description: "i18n.collectors.onlinejobs_ph.description",
        version: "0",
        website: "https://www.onlinejobs.ph/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61346.jpg",
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
        entryUrl: "https://www.onlinejobs.ph/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlinejobsPhCollector.CONFIG);
    }
}
