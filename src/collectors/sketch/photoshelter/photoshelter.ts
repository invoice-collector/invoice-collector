
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PhotoshelterCollector extends SketchCollector {

    static CONFIG = {
        id: "photoshelter",
        name: "photoshelter",
        description: "i18n.collectors.photoshelter.description",
        version: "0",
        website: "https://www.photoshelter.com/mem/account/order-list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88800.jpg",
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
        loginUrl: "https://www.photoshelter.com/mem/account/order-list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhotoshelterCollector.CONFIG);
    }
}
