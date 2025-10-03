
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StudioNinjaCollector extends SketchCollector {

    static CONFIG = {
        id: "studio_ninja",
        name: "Studio Ninja",
        description: "i18n.collectors.studio_ninja.description",
        version: "0",
        website: "https://app.studioninja.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1122485.jpg",
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
        entryUrl: "https://app.studioninja.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StudioNinjaCollector.CONFIG);
    }
}
