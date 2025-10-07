
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArcadeCollector extends SketchCollector {

    static CONFIG = {
        id: "arcade",
        name: "Arcade",
        description: "i18n.collectors.arcade.description",
        version: "0",
        website: "https://app.arcade.software/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179207.jpg",
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
        entryUrl: "https://app.arcade.software/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArcadeCollector.CONFIG);
    }
}
