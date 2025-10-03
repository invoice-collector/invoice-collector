
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThemeforestCollector extends SketchCollector {

    static CONFIG = {
        id: "themeforest",
        name: "Themeforest",
        description: "i18n.collectors.themeforest.description",
        version: "0",
        website: "https://themeforest.net/downloads",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1311105.jpg",
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
        entryUrl: "https://themeforest.net/downloads",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThemeforestCollector.CONFIG);
    }
}
