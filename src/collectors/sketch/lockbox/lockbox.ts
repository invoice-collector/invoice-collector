
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LockboxCollector extends SketchCollector {

    static CONFIG = {
        id: "lockbox",
        name: "Lockbox",
        description: "i18n.collectors.lockbox.description",
        version: "0",
        website: "https://www.lockboxsystem.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36412.jpg",
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
        entryUrl: "https://www.lockboxsystem.com/users/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LockboxCollector.CONFIG);
    }
}
