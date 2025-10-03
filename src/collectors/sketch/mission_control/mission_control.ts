
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MissionControlCollector extends SketchCollector {

    static CONFIG = {
        id: "mission_control",
        name: "Mission Control",
        description: "i18n.collectors.mission_control.description",
        version: "0",
        website: "http://www.hellomissioncontrol.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19936.jpg",
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
        entryUrl: "http://www.hellomissioncontrol.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MissionControlCollector.CONFIG);
    }
}
