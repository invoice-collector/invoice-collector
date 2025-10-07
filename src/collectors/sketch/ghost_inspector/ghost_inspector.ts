
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GhostInspectorCollector extends SketchCollector {

    static CONFIG = {
        id: "ghost_inspector",
        name: "Ghost Inspector",
        description: "i18n.collectors.ghost_inspector.description",
        version: "0",
        website: "https://app.ghostinspector.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27520.jpg",
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
        entryUrl: "https://app.ghostinspector.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GhostInspectorCollector.CONFIG);
    }
}
