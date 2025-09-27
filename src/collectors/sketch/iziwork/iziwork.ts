
import { SketchCollector } from '../../sketchCollector';

export class IziworkCollector extends SketchCollector {

    static CONFIG = {
        id: "iziwork",
        name: "iziwork",
        description: "i18n.collectors.iziwork.description",
        version: "0",
        website: "https://pro.iziwork.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811758.jpg",
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
        entryUrl: "https://pro.iziwork.com/",
    }

    constructor() {
        super(IziworkCollector.CONFIG);
    }
}
