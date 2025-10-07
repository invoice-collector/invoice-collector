
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MoverIoCollector extends SketchCollector {

    static CONFIG = {
        id: "mover_io",
        name: "mover.io",
        description: "i18n.collectors.mover_io.description",
        version: "0",
        website: "https://app.mover.io/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7128.jpg",
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
        entryUrl: "https://app.mover.io/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MoverIoCollector.CONFIG);
    }
}
