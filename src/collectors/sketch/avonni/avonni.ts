
import { SketchCollector } from '../../sketchCollector';

export class AvonniCollector extends SketchCollector {

    static CONFIG = {
        id: "avonni",
        name: "Avonni",
        description: "i18n.collectors.avonni.description",
        version: "0",
        website: "https://admin.avonni.app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316260.jpg",
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
        entryUrl: "https://admin.avonni.app/",
    }

    constructor() {
        super(AvonniCollector.CONFIG);
    }
}
