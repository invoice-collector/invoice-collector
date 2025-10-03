
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TunesatCollector extends SketchCollector {

    static CONFIG = {
        id: "tunesat",
        name: "TuneSat",
        description: "i18n.collectors.tunesat.description",
        version: "0",
        website: "https://tunesat.com/tunesatportal/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534535.jpg",
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
        entryUrl: "https://tunesat.com/tunesatportal/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TunesatCollector.CONFIG);
    }
}
