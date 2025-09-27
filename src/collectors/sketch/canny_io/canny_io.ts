
import { SketchCollector } from '../../sketchCollector';

export class CannyIoCollector extends SketchCollector {

    static CONFIG = {
        id: "canny_io",
        name: "canny.io",
        description: "i18n.collectors.canny_io.description",
        version: "0",
        website: "https://canny.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746833.jpg",
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
        entryUrl: "https://canny.io/login",
    }

    constructor() {
        super(CannyIoCollector.CONFIG);
    }
}
