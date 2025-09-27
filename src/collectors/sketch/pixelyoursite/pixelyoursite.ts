
import { SketchCollector } from '../../sketchCollector';

export class PixelyoursiteCollector extends SketchCollector {

    static CONFIG = {
        id: "pixelyoursite",
        name: "PixelYourSite",
        description: "i18n.collectors.pixelyoursite.description",
        version: "0",
        website: "https://www.pixelyoursite.com/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037326.jpg",
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
        entryUrl: "https://www.pixelyoursite.com/my-account",
    }

    constructor() {
        super(PixelyoursiteCollector.CONFIG);
    }
}
