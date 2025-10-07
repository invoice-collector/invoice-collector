
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StarTouchCollector extends SketchCollector {

    static CONFIG = {
        id: "star_touch",
        name: "Star Touch",
        description: "i18n.collectors.star_touch.description",
        version: "0",
        website: "http://www.startouch.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8711.jpg",
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
        entryUrl: "http://www.startouch.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StarTouchCollector.CONFIG);
    }
}
