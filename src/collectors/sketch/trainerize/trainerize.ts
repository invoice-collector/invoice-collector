
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrainerizeCollector extends SketchCollector {

    static CONFIG = {
        id: "trainerize",
        name: "Trainerize",
        description: "i18n.collectors.trainerize.description",
        version: "0",
        website: "https://www.trainerize.com/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67823.jpg",
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
        entryUrl: "https://www.trainerize.com/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrainerizeCollector.CONFIG);
    }
}
