
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChaosgroupCollector extends SketchCollector {

    static CONFIG = {
        id: "chaosgroup",
        name: "Chaosgroup",
        description: "i18n.collectors.chaosgroup.description",
        version: "0",
        website: "http://accounts.chaosgroup.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210559.jpg",
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
        entryUrl: "http://accounts.chaosgroup.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChaosgroupCollector.CONFIG);
    }
}
