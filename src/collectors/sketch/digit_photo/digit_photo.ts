
import { SketchCollector } from '../../sketchCollector';

export class DigitPhotoCollector extends SketchCollector {

    static CONFIG = {
        id: "digit_photo",
        name: "Digit Photo",
        description: "i18n.collectors.digit_photo.description",
        version: "0",
        website: "https://www.digit-photo.com/login.html?back=compteclient.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117229.jpg",
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
        entryUrl: "https://www.digit-photo.com/login.html?back=compteclient.html",
    }

    constructor() {
        super(DigitPhotoCollector.CONFIG);
    }
}
