
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YousignCollector extends SketchCollector {

    static CONFIG = {
        id: "yousign",
        name: "yousign",
        description: "i18n.collectors.yousign.description",
        version: "0",
        website: "https://auth.yousign.app/u/login?state=hKFo2SBzMFNvX28wX0Qxd180b1VlbFFyQ0dFYUZ6QkZ3MDI5LaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDRzYmNtNnZDcVQ5T2t4ci1mYVFhOVdlTVZTS3ltN29Qo2NpZNkgblg4bWNpc2lkODM1dWZPUU1ObGhWYmp1VlBpQkdjblE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/987511.jpg",
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
        entryUrl: "https://auth.yousign.app/u/login?state=hKFo2SBzMFNvX28wX0Qxd180b1VlbFFyQ0dFYUZ6QkZ3MDI5LaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDRzYmNtNnZDcVQ5T2t4ci1mYVFhOVdlTVZTS3ltN29Qo2NpZNkgblg4bWNpc2lkODM1dWZPUU1ObGhWYmp1VlBpQkdjblE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YousignCollector.CONFIG);
    }
}
