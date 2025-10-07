
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PreviewAppCollector extends SketchCollector {

    static CONFIG = {
        id: "preview_app",
        name: "preview.app",
        description: "i18n.collectors.preview_app.description",
        version: "0",
        website: "https://preview.app/settings/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778123.jpg",
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
        entryUrl: "https://preview.app/settings/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PreviewAppCollector.CONFIG);
    }
}
