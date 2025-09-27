
import { SketchCollector } from '../../sketchCollector';

export class PresseboxCollector extends SketchCollector {

    static CONFIG = {
        id: "pressebox",
        name: "Pressebox",
        description: "i18n.collectors.pressebox.description",
        version: "0",
        website: "https://www.pressebox.de/mybox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102719.jpg",
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
        entryUrl: "https://www.pressebox.de/mybox",
    }

    constructor() {
        super(PresseboxCollector.CONFIG);
    }
}
