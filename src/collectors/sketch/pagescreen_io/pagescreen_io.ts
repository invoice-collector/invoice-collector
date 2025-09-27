
import { SketchCollector } from '../../sketchCollector';

export class PagescreenIoCollector extends SketchCollector {

    static CONFIG = {
        id: "pagescreen_io",
        name: "Pagescreen.io",
        description: "i18n.collectors.pagescreen_io.description",
        version: "0",
        website: "https://app.pagescreen.io/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169058.jpg",
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
        entryUrl: "https://app.pagescreen.io/account/invoice",
    }

    constructor() {
        super(PagescreenIoCollector.CONFIG);
    }
}
