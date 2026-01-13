
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MapboxCollector extends SketchCollector {

    static CONFIG = {
        id: "mapbox",
        name: "Mapbox",
        description: "i18n.collectors.mapbox.description",
        version: "0",
        website: "https://www.mapbox.com/studio/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14942.jpg",
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
        loginUrl: "https://www.mapbox.com/studio/signin/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MapboxCollector.CONFIG);
    }
}
