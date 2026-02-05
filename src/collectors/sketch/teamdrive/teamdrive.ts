
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeamdriveCollector extends SketchCollector {

    static CONFIG = {
        id: "teamdrive",
        name: "TeamDrive",
        description: "i18n.collectors.teamdrive.description",
        version: "0",
        website: "https://teamdrive.com/shop/?page=signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7733.jpg",
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
        loginUrl: "https://teamdrive.com/shop/?page=signin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeamdriveCollector.CONFIG);
    }
}
